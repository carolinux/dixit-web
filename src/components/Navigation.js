import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Score from './Score';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    textDecoration: 'none'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openScore, setOpenScore] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const onSidebarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onSidebarClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSidebarOpen(value);
  };

  const showScore = () => {
    setOpenScore(true);
  }

  const hideScore = () => {
    setOpenScore(false);
  }

  const list = () => (
    <div
      className={classes.list + ' ' + classes.listItems}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.listItems}>
        <ListItem button>
          <ListItemText>
            <Typography variant='h4' className={classes.title}>
              Dixit
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button onClick={showScore}>
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
        <a href='/rules' className={classes.links}>
          <ListItem>
            <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
            {'How to play'}
          </ListItem>
        </a>
        <ListItem>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          {'User info'}
        </ListItem>
        <Divider />
        <a href='/board' className={classes.links}>
          <ListItem>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            {'Home'}
          </ListItem>
        </a>
        <a href='/about' className={classes.links}>
          <ListItem>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            {'About'}
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.topBar}>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' className={classes.title}>
            Dixit
          </Typography>
          <div>
            <IconButton
              aria-label='start game'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={onSidebarOpen}
              color='inherit'>
              <PlayCircleFilledWhiteOutlinedIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
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
              onClose={onSidebarClose}
            >
              <MenuItem onClick={onSidebarClose}>Start the game!</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Fragment>
        <Drawer open={sidebarOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Fragment>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openScore}
        onClose={hideScore}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openScore}>
          <div className={classes.paper}>
            <Score />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Navigation;
