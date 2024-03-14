import Link from "next/link";
import { Button, Grid } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#f1f5f9", height: "50px", paddingInline: "10px" }}>
      <Grid
        item
        xs={6}
        sm={4}
        sx={{ display: "flex", alignItems: "center" }}>
        <Logo
          width={24}
          height={24}
          textSize={14}
          gap={1}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={8}
        sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {[
          {
            href: "/",
            label: "HOME",
          },
          {
            href: "/about",
            label: "ABOUT",
          },
          {
            href: "/blog",
            label: "BLOG",
          },
        ].map(({ href, label }, i) => (
          <Link
            key={i}
            href={href}>
            <Button variant="text">{label}</Button>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
