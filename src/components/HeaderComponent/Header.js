import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';

export const Header = () => {

  const [open, setOpen] = React.useState(false)

  const toggleNavbar = () => {
    setOpen(!open)
  }

  return (
    <div className="container-fluid" >
      <div className="row " >
        <div className="col-12">


          <Box sx={{ flexGrow: 1 }} >
            <AppBar position="sticky" sx={{ backgroundColor: 'pink' }}>
              <Toolbar>
                {/* <IconButton
                  size="large"
                  edge="start"
                  color="black"
                  aria-label="menu"
                  sx={{ mr: 2, }}
                  onClick={toggleNavbar}
                >
                  <MenuIcon />
                </IconButton> */}
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                  Pizza Factory
                </Typography>
                <Badge badgeContent={0} color="secondary">
                  <AddShoppingCartIcon fontSize='large' sx={{ color: 'black' }} />
                </Badge>

              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
    </div>
  );
}