import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/nav/Nav';
import { TweenMax, Expo } from 'gsap';

import Landing from './components/body/Landing';
import AboutMe from './components/body/AboutMe';
import Skills from './components/body/Skills';
import ContactMe from './components/body/ContactMe';
import Footer from './components/body/Footer';

// this is my portofolio website.

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
  },
  landingOverlay: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    background: theme.palette.primary.main,
    top: '0%',
    zIndex: 1101,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    '@media (max-width: 1024px)': {
      // height 100vh mobile
      height: '-webkit-fill-available',
      textAlign: 'center',
    },
  },
  overlayName: {
    fontSize: 100,
    letterSpacing: 10,
    '@media (max-width: 1024px)': {
      fontSize: '3rem',
    },
  },
  overlayDesc: {
    fontSize: 30,
    letterSpacing: 3,
    '@media (max-width: 1024px)': {
      fontSize: '2rem',
    },
  },
}));

const Portfolio = (props) => {
  const classes = useStyles();

  useEffect(() => {
    // Cover Animation
    TweenMax.to('#landingOverlay h2', 2, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to('#landingOverlay span', 2, {
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to('#landingOverlay', 2, {
      delay: 1,
      top: '-100%',
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div id='landingOverlay' className={classes.landingOverlay}>
          <h2 className={classes.overlayName}>Zac Eckert</h2>
          <h2 className={classes.overlayDesc}>Front End Engineer</h2>
        </div>
        <Landing />

        <Nav
          prefersDarkMode={props.prefersDarkMode}
          setPrefersDarkMode={props.setPrefersDarkMode}
        />
        <AboutMe />
        <Skills />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
