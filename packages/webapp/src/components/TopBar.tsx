import { Toolbar, Typography, AppBar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar: () => JSX.Element = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h3" color="inherit" component={Link} to="/">
        React Tutorial
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
