"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const NavBar = () => {
  const navList = [
    {
      href: "/",
      label: "HOME",
    },

    {
      href: "/article",
      label: "ARTICLE",
    },
    {
      href: "/blog",
      label: "BLOG",
    },
    {
      href: "/sub-nav",
      label: "SUB-NAV",
      children: [
        {
          href: "/sub-nav/item1",
          label: "ITEM1",
        },
        {
          href: "/sub-nav/item2",
          label: "ITEM2",
        },
        {
          href: "/sub-nav/item3",
          label: "ITEM3",
        },
      ],
    },
    {
      href: "/service",
      label: "SERVICE",
    },
    {
      href: "/mysub-nav2",
      label: "SUB-NAV2",
      children: [
        {
          href: "/mysub-nav2/item2-1",
          label: "ITEM2-1",
        },
        {
          href: "/mysub-nav2/item2-2",
          label: "ITEM2-2",
        },
        {
          href: "/mysub-nav2/item2-3",
          label: "ITEM2-3",
        },
      ],
    },
    {
      href: "/about",
      label: "ABOUT",
    },
  ];

  const [opens, setOpens] = useState<{ i: number; open: boolean }[]>([]);
  const router = useRouter();
  const pathName = usePathname();

  const handleToggleOpenSub = (i: number, close?: boolean) => {
    const curItem = opens.find(item => item.i === i);
    if (curItem) {
      curItem.open = close ?? !curItem.open;
      setOpens(o => [...o.filter(item => item.i !== i), curItem]);
    } else {
      setOpens([{ i, open: true }]);
    }
  };

  return (
    <Box
      display={"flex"}
      bgcolor={"#09090b"}
      color={"white"}
      paddingInline={2}
      height={64}
      gap={1}>
      {navList.map((nav, i) =>
        nav?.children ? (
          <List
            key={i}
            sx={{ bgcolor: "inherit" }}
            component="nav">
            <ListItemButton
              className={`nav-item ${pathName?.includes(nav.href) && "active"}`}
              onClick={() => router.push(nav.href)}
              onMouseEnter={() => handleToggleOpenSub(i)}>
              <ListItemText primary={nav.label} />
              {opens.find(item => item.i === i)?.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={opens.find(item => item.i === i)?.open}
              timeout="auto"
              unmountOnExit>
              <List
                component="div"
                sx={{ backgroundColor: "#fca5a5" }}
                disablePadding>
                {nav.children.map((subNav, j) => (
                  <ListItemButton
                    key={j}
                    className={`nav-item ${subNav.href === pathName && "active"}`}
                    onClick={() => router.push(subNav.href)}
                    sx={{ pl: 4 }}>
                    <ListItemText primary={subNav.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        ) : (
          <List
            key={i}
            sx={{ bgcolor: "inherit" }}
            component="nav">
            <ListItemButton
              className={`nav-item ${nav.href === pathName && "active"}`}
              onClick={() => router.push(nav.href)}>
              <ListItemText primary={nav.label} />
            </ListItemButton>
          </List>
        )
      )}
    </Box>
  );
};

export default NavBar;
