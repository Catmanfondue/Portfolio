import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    background: '#000',
    height: '100px',
    textAlign: 'center',
    position: 'relative',
  },
  backToTopBtn: {
    background: theme.palette.primary.main,
    margin: 'auto',
    display: 'block',
    top: '-15px',
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
        <a href='#landing'>
          <IconButton className={classes.backToTopBtn}>
            <ArrowUpwardIcon />
          </IconButton>
        </a>
        <span className={classes.footnote}>Zachary Eckert ©2020</span>
      </div>
    </>
  );
};

export default Footer;
