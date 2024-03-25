"use client";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={60}
      gap={2}>
        <Typography variant="overline" display="block" gutterBottom>
            关于我们
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
            联系我们
        </Typography>
     </Box>
  );
};

export default Footer;