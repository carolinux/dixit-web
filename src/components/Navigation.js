import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Lobster',
  },
  topBar: {
    background: '#3f51b505'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
  listItems: {
    fontFamily: 'Lobster',
    paddingRight: 20
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSidebarOpen(value);
  };

  const list = () => (
    <div
      className={classes.list + ' ' + classes.listItems}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.listItems}>
        <ListItem button>
          <ListItemText>
            <Typography variant="h4" className={classes.title}>
              Dixit
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><EqualizerIcon /></ListItemIcon>
          {'Score now'}
        </ListItem>
        <ListItem button>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          {'Hall of fame'}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
          <a href='/rules'>{'How to play'}</a>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          {'User info'}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          {'Home'}
        </ListItem>
        <ListItem button>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          {'About'}
        </ListItem>
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.topBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Dixit
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <Fragment key={'left'}>
          <Drawer anchor={'left'} open={sidebarOpen} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </Fragment>
      </div>

    </div>
  );
}
