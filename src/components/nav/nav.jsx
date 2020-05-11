import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// icons
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  name: {
    marginRight: 120,
  },
  linksContainer: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flex: '.4',
  },
  link: {
    fontSize: '1rem',
  },
  professionalLinks: { marginLeft: 'auto' },
  upperToolBar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const theme = useTheme();

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
            <a href='#landing' className={classes.link}>
              Home
            </a>
            <a href='#about' className={classes.link}>
              About
            </a>
            <a href='#skills' className={classes.link}>
              Skills
            </a>
            <a href='#contactMe' className={classes.link}>
              Contact
            </a>
          </div>
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
    </div>
  );
};

export default Nav;
