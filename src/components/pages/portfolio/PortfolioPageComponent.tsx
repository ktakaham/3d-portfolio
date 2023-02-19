import { Box, Card } from "@mui/material";
import Spline from "@splinetool/react-spline";

const links = [
  "https://prod.spline.design/2KYzpJ1RhNmS-5yF/scene.splinecode",
  "https://prod.spline.design/2KYzpJ1RhNmS-5yF/scene.splinecode",
];

export const PortfolioPageComponent = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
        gridTemplateRows: { md: "repeat(1, 1fr)" },
        gap: { xs: 4, md: 2 },
        paddingX: 2,
        paddingTop: { xs: 2, md: 2 },
        paddingBottom: 3,
        maxWidth: "1400px",
        mx: "auto",
      }}>
      {links.map((val) => {
        return <CardUI url={val} />;
      })}
    </Box>
  );
};

const CardUI = ({ url }: { url: string }) => {
  return (
    <Card
      sx={{
        height: "300px",
        bgcolor: "background.dark",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}>
      <Spline scene={url}/>
    </Card>
  );
};
