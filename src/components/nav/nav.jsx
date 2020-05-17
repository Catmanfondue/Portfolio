import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Drawer from '@material-ui/core/Drawer';

import Resume from '../../assets/Eckert_Resume.pdf';

// icons
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: 64,
    overflowX: 'hidden',
    '@media (max-width: 1024px)': {},
  },
  name: {
    marginRight: 120,
    '@media (max-width: 1024px)': { display: 'none' },
  },
  linksContainer: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flex: '.6',
    '@media (max-width: 1024px)': { display: 'none' },
  },
  link: {
    fontSize: '1rem',
    fontWeight: 600,

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  professionalLinks: {
    marginLeft: 'auto',
    '@media (max-width: 1024px)': {
      display: 'flex',
      justifyContent: 'space-evenly;',
    },
  },
  upperToolBar: {
    backgroundColor: theme.palette.primary.main,
    height: 64,
    '@media (max-width: 1024px)': { padding: 0 },
  },
  mobileHamburger: {
    display: 'none',
    '@media (max-width: 1024px)': { display: 'block' },
  },
  mobileNavList: {
    display: 'flex',
    flexDirection: 'column',
  },
  mobileLink: {
    padding: 30,
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const switchTheme = () => {
    let prefersDarkMode = !props.prefersDarkMode;
    localStorage.setItem('prefersDarkMode', prefersDarkMode);
    props.setPrefersDarkMode(!props.prefersDarkMode);
  };

  return (
    <div className={classes.root}>
      <AppBar position='sticky' id='navBar'>
        <Toolbar className={classes.upperToolBar}>
          <Typography variant='h6' noWrap className={classes.name}>
            Zachary Eckert
          </Typography>
          <div className={classes.linksContainer}>
            <a id='navLinkHome' href='#landing' className={classes.link}>
              Home
            </a>
            <a id='navLinkAbout' href='#about' className={classes.link}>
              About
            </a>
            <a id='navLinkSkills' href='#skills' className={classes.link}>
              Skills
            </a>
            <a id='navLinkContact' href='#contactMe' className={classes.link}>
              Contact
            </a>
            <a
              href={Resume}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              Resume
            </a>
          </div>
          <IconButton
            className={classes.mobileHamburger}
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.professionalLinks}>
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
              href='mailto:zaceckert74@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconButton>
                <EmailIcon />
              </IconButton>
            </a>

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
        open={drawerOpen}
        anchor='top'
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <div
          className={classes.mobileNavList}
          role='presentation'
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <a
            id='mobileNavLinkHome'
            href='#landing'
            className={classes.mobileLink}
          >
            Home
          </a>
          <a
            id='mobileNavLinkAbout'
            href='#about'
            className={classes.mobileLink}
          >
            About
          </a>
          <a
            id='mobileNavLinkSkills'
            href='#skills'
            className={classes.mobileLink}
          >
            Skills
          </a>
          <a
            id='mobileNavLinkContact'
            href='#contactMe'
            className={classes.mobileLink}
          >
            Contact
          </a>
          <a
            href={Resume}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.mobileLink}
          >
            Resume
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
