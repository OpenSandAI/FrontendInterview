import Link from "next/link";
import { Avatar, Box } from "@mui/material";

interface ILogoProps {
  width?: number;
  height?: number;
  textSize?: number;
  gap?: number;
}

const Logo = ({ width = 40, height = 40, textSize = 20, gap = 2 }: ILogoProps) => {
  return (
    <Link
      href={"/"}
      style={{ textDecoration: "none", color: "black" }}>
      <Box
        display="flex"
        gap={gap}
        alignItems={"center"}>
        {/* <Image
        src={"./next.svg"}
        alt="Logo Image"
        priority
        width={width}
        height={height}
      /> */}
        <Avatar
          src="./next.svg"
          sx={{ width, height }}
        />
        <p style={{ fontSize: textSize + "px", lineHeight: textSize + "px" }}>Next WebSite</p>
      </Box>
    </Link>
  );
};

export default Logo;
