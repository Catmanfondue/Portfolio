import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Link } from 'react-router-dom';
// icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/Build';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.secondary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  links: {
    position: 'absolute',
    right: 20,
  },
  upperToolBar: {
    position: 'relative',
    backgroundColor: theme.palette.primary,
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const open = props.drawerOpen;

  const switchTheme = () => {
    let prefersDarkMode = !props.prefersDarkMode;
    localStorage.setItem('prefersDarkMode', prefersDarkMode);
    props.setPrefersDarkMode(!props.prefersDarkMode);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.upperToolBar}>
          <IconButton
            aria-label='open drawer'
            onClick={() => {
              props.setDrawerOpen(true);
            }}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' noWrap>
            Zachary Eckert
          </Typography>
          <div className={classes.links}>
            <FormControlLabel
              control={
                <Switch
                  onChange={switchTheme}
                  checked={props.prefersDarkMode}
                />
              }
              label='Dark Mode'
            />

            <a
              href='https://www.linkedin.com/in/zachary-eckert-400922134/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a
              href='https://github.com/Catmanfondue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        color={'secondary'}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={() => {
              props.setDrawerOpen(false);
            }}
          >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/'>
            <ListItem button key={'Home'}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>
          <Link to='/About'>
            <ListItem button key={'About'}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
          </Link>
          <Link to='/Skills'>
            <ListItem button key={'Skills'}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary={'Skills'} />
            </ListItem>
          </Link>
          <Link to='/Contact'>
            <ListItem button key={'Contact'}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Contact'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default Nav;
