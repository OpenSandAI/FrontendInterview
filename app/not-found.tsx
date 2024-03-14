import Link from "next/link";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingBlock={20}
      alignItems={"center"}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Box>
  );
};

export default NotFound;
