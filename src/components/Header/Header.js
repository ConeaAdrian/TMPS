import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Mobile Store
        </Typography>
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
