'use client'

import { FC, useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, Collapse, IconButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({ }) => {

  const [open, setOpen] = useState(false);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleToggle = (itemId: string) => {
    setExpanded(expanded === itemId ? false : itemId);
  };

  const menuItems = [
    { title: '菜单1', submenu: ['子菜单1', '子菜单2'] },
    { title: '菜单2', submenu: ['子菜单1', '子菜单2'] },
  ];

  return (
    <div className='w-40'>
      <List>
        {menuItems.map((menuItem) => (
          <div key={menuItem.title}>
            <ListItem disablePadding key={menuItem.title}>
              <ListItemButton onClick={() => handleToggle(menuItem.title)}>
                <ListItemText primary={menuItem.title} />
                {menuItem.submenu && expanded === menuItem.title ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            {menuItem.submenu && (
              <Collapse in={expanded === menuItem.title} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {menuItem.submenu.map((subMenuItem) => (
                    <ListItem key={subMenuItem}>
                      <ListItemText primary={subMenuItem} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  );

}

export default Navbar;