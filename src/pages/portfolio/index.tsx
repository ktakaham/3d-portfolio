import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { Layout } from "@/components/layouts/";
import { PortfolioPageComponent } from "@/components/pages/portfolio/PortfolioPageComponent";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const PortfolioPage: NextPageWithLayout = () => <PortfolioPageComponent />;
PortfolioPage.getLayout = (page) => (
  <Layout>{page}</Layout>
);
export default PortfolioPage;