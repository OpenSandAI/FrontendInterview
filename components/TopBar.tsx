"use client";
import { useShallow } from "zustand/react/shallow";
import { Button, Grid } from "@mui/material";
import useLogin from "@/hooks/useLogin";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const TopBar = () => {
  const [setOpen] = useLogin(useShallow(state => [state.setOpen]));

  return (
    <Grid
      container
      paddingInline={1}
      height={100}>
      {/* left */}
      <Grid
        item
        xs={6}
        sm={4}
        sx={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </Grid>
      {/* right */}
      <Grid
        item
        xs={6}
        sm={8}
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <SearchBox />
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}>
          LOGIN
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopBar;
