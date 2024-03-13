"use client";
import * as React from "react";
import {
  AppBar,
  IconButton,
  Button,
  TextField,
  Box,
  Typography,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Markdown from "react-markdown";

const markdownText = "# Heading\n\nThis is some **bold** and *italic* text.";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col justify-between">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ mr: 2 }}>LOGO</Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SiteName
            </Typography>

            <TextField
              placeholder="Search"
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
            <Button color="inherit" sx={{ ml: 2 }}>
              Login
            </Button>
          </Toolbar>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <List sx={{ minWidth: 200 }}>
              {(["menu1", "menu2", "menu3", "menu4"] as const).map((name) => (
                <React.Fragment key={name}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Drawer>
        </AppBar>

        <Paper sx={{ m: 2, p: 2 }}>
          <Markdown>{markdownText}</Markdown>
        </Paper>
      </main>

      <footer className="flex-col text-center p-2">
        <Typography variant="h5">Logo</Typography>
        <Typography variant="h5">Site@2024</Typography>
      </footer>
    </div>
  );
}
