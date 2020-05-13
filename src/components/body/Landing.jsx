import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import LandingImage from '../../assets/landing.jpg';
import dontKnowImage from '../../assets/dontKnow.jpg';

import { TweenMax, Expo, Power3 } from 'gsap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Nav from '../nav/Nav';

const useStyles = makeStyles((theme) => ({
  landingSection: {
    width: '100%',
    height: '100vh',
  },
  landingOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    background: theme.palette.primary.main,
    top: '0%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayName: {
    fontSize: 100,
    letterSpacing: 10,
  },
  overlayDesc: {
    fontSize: 30,
    letterSpacing: 3,
  },
  ellipseContainer: {
    width: 608,
    height: 608,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%',
    margin: '0px auto',
    background: [[`url(${dontKnowImage})`, 'no-repeat']],
    backgroundPosition: '50%',
    backgroundSize: 'cover',
  },
  colorEllipse: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: theme.palette.primary.main + ' transparent',
    transform: 'rotate(-45deg)',
    top: 12,
    left: 12,
    animation: 'ellipseRotate 15s ease-in-out infinite',
  },

  // landingSection: {
  //   height: 'calc(100vh + 64px)',
  // },
  // landingDiv: {
  //   height: '100%',
  //   position: 'relative',
  //   textAlign: 'center',
  // },
  // myName: {
  //   color: theme.palette.secondary.main,
  // },
  // tagLine: {
  //   margin: 0,
  // },
}));

const Landing = (props) => {
  const classes = useStyles();
  const landingRef = useRef(null);

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

    TweenMax.to('#navBar', 2, {
      visibility: 'visible',
    });

    // Circles
    TweenMax.from('#ellipseContainer', 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from('#colorEllipse', 1, {
      delay: 3.5,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  }, []);

  const landingIntersection = useIntersection(landingRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const fixateNav = (element) => {
    gsap.to(element, 1, {
      position: 'fixed',
      ease: 'power4.out',
    });
  };

  const placeNav = (element) => {
    // This is having trouble ALWAYS running so we will call it a feature that it stays open
    gsap.to(element, 1, {
      position: 'absolute',
      ease: 'power4.out',
    });
  };
  if (landingIntersection !== null) {
    // if the landing is visible just let it act normal, otherwise fixate it.
    landingIntersection.intersectionRatio > 0
      ? //  reached
        placeNav('#navBar')
      : // not Reached
        fixateNav('#navBar');
  }

  return (
    <section id='landing' className={classes.landingSection} ref={landingRef}>
      <div id='landingOverlay' className={classes.landingOverlay}>
        <h2 className={classes.overlayName}>Zac Eckert</h2>
        <span className={classes.overlayDesc}>Front End Developer</span>
      </div>

      <div className={'wrapper'}>
        <div className='text'>
          <div className='title'>Zac Eckert</div>
          <span>Enthusiastic Front End Developer</span>
        </div>

        <div id='ellipseContainer' className={classes.ellipseContainer}>
          {/* <div className='ellipse thick'></div> */}
          <div id='colorEllipse' className={classes.colorEllipse}></div>
          <a href='#about'>
            <Button variant='outlined' color='primary'>
              New Portfolio who dis?
            </Button>
          </a>
        </div>
      </div>

      {/* OLD LANDING */}
      <div className={'flex'}>
        <h1>
          Hello, I'm <span className={classes.myName}>Zac Eckert</span>
        </h1>
        <h1>I'm a Web Developer.</h1>

        <Nav
          prefersDarkMode={props.prefersDarkMode}
          setPrefersDarkMode={props.setPrefersDarkMode}
        />
      </div>
    </section>
  );
};

export default Landing;
