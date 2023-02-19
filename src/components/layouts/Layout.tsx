import { Card } from "@nextui-org/react";

import { Header } from "./Header";

/**
 * @package
 */
export const getLayout = (page: React.ReactElement) => {
  return (
    <Card
      css={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
        minHeight: "100vh",
      }}>
      <Header />
      <main>{page}</main>
    </Card>
  );
};
