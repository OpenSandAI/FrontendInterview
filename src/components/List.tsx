"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, List, Collapse, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Lists = () => {

  const router = useRouter();
  const [open, setOpen] = useState<{ val: number; open: boolean }[]>([]);
  
  const Lists = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
      children: [
        {
          href: "/about",
          label: "About",
        },
        {
          href: "/title",
          label: "Title",
        },
      ],
    },
  ];

  const handleOpen= (val: number) => {
    const openItem = open.find(item => item.val === val);
    if (openItem) {
      openItem.open = !openItem.open;
      setOpen(it => [...it.filter(item => item.val !== val), openItem]);
    } else {
      setOpen([{ val, open: true }]);
    }
  };

  return (
    <Box display={"flex"} height={60} gap={2}>
      {Lists.map((item, val) =>
        item?.children ? (
          <List key={val}>
            <ListItemButton
              onClick={() => router.push(item.href)}
              onMouseEnter={() => handleOpen(val)}>
              <ListItemText primary={item.label} />
              {open.find(item => item.val === val)?.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open.find(item => item.val === val)?.open}
              timeout="auto"
              unmountOnExit>
              <List disablePadding>
                {item.children.map((items, vals) => (
                  <ListItemButton key={vals} onClick={() => router.push(items.href)}>
                    <ListItemText primary={items.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        ) : (
          <List key={val}>
            <ListItemButton onClick={() => router.push(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </List>
        )
      )}
    </Box>
  );
};

export default Lists;