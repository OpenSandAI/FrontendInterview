"use client";
import { Grid } from "@mui/material";
import Search from "./Search";
import Login from "./Login";
import Image from "next/image";

const Header = () => {

  return (
    <Grid
      container
      height={60}>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", alignItems: "center" }}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Search />
        <Login />
      </Grid>
    </Grid>
  );
};

export default Header;