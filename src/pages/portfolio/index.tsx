import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { PortfolioPageComponent } from "@/components/pages/portfolio/PortfolioPageComponent";
import { getLayout } from "@/components/layouts/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const PortfolioPage: NextPageWithLayout = () => <PortfolioPageComponent />;
PortfolioPage.getLayout = getLayout;
export default PortfolioPage;
