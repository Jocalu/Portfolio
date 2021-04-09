import React, { useState } from 'react';
import './MenuMobile.scss';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import information from '../../constants/information-jose-EN';

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="menu-mobile">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon className="menu__icon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component="a"
          href="/about-me"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page1}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/resume"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page2}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/formation"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page3} & ${information.menu.page4}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/projects"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page5}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/contact"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page6}`}
        </MenuItem>
      </Menu>
    </section>
  );
}
