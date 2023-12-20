import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box  sx={{ flexGrow: 1, backgroundColor:'red' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MEDIUMBLOG
          </Typography>
          <Button color="inherit">Our story</Button>
          <Button color="inherit">Membership</Button>
          <Button color="inherit">Write</Button>
          <Button color="inherit"><Link to='/register'>Sign in</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
