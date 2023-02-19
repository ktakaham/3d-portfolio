import type { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
const darkTheme = createTheme({
  type: "dark",
});

const lightTheme = createTheme({
  type: "light",
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}>
        {getLayout(<Component {...pageProps} />)}
      </NextThemesProvider>
    </div>
  );
};

export default App;
