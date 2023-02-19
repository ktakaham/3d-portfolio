import { Avatar, Box, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";

const links = [
  {
    url: "https://prod.spline.design/xSfN9Hu5MfehHefI/scene.splinecode",
    title: "UP POPUP STORE HARAJYUKU",
    date: "2023/02/19",
  },
  {
    url: "https://prod.spline.design/2KYzpJ1RhNmS-5yF/scene.splinecode",
    title: "Birthday Cake 2023",
    date: "2023/2/18",
  },
  {
    url: "https://prod.spline.design/0ttOeDTY42NLheoh/scene.splinecode",
    title: "晩飯@東京厨房千駄ヶ谷",
    date: "2022/11/24",
  },
  {
    url: "https://prod.spline.design/ETiWmTnX9IVPsTUB/scene.splinecode",
    title: "タコパ",
    date: "2022/11/19",
  },
  {
    url: "https://prod.spline.design/Y2w634IXpcVYm059/scene.splinecode",
    title: "晩飯@ガスト西新宿店",
    date: "2022/10/6",
  },
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
        return <CardUI url={val.url} title={val.title} date={val.date} />;
      })}
    </Box>
  );
};

type props = {
  url: string;
  title: string;
  date: string;
};

const CardUI = ({ url, title, date }: props) => {
  return (
    <Card
      sx={{
        height: "400px",
        bgcolor: "background.dark",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}>
      <CardHeader title={title} subheader={date} />
      <Spline scene={url} />
    </Card>
  );
};
