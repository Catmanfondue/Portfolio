import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    background: '#000',
    textAlign: 'center',
    position: 'relative',
  },
  backToTopBtn: {
    background: theme.palette.primary.main,
    margin: 'auto',
    display: 'block',
    width: 48,
    top: '-15px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  footnote: {
    color: '#fff',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footerDiv}>
        <IconButton className={classes.backToTopBtn} href='#landing'>
          <ArrowUpwardIcon />
        </IconButton>

        <span className={classes.footnote}>Zachary Eckert 2020</span>

        <div className={classes.professionalLinks}>
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
      </div>
    </>
  );
};

export default Footer;
