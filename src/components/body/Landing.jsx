import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import computerDeskImage from '../../assets/computerDesk.jpg';

import { TweenMax, Power3 } from 'gsap';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  landingSection: {
    width: '100%',
    height: '100vh',
    '@media (max-width: 1024px)': {},
  },
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: [[`url(${computerDeskImage})`, 'no-repeat']],
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameDiv: {
    background: theme.palette.primary.main,
    top: '10%',
    position: 'absolute',
    fontSize: '3rem',
    width: '50%',
    height: '25%',
    transform: 'skew(-45deg)',
    marginLeft: 'calc(25vh/-2)',
    paddingLeft: 'calc(25vh/2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1024px)': {
      width: '100%',
      fontSize: '2rem',
    },
  },
  name: {
    transform: 'skew(45deg)',
    display: 'block',
    color: '#fff',
  },
  jobTitleDiv: {
    background: theme.palette.secondary.main,
    bottom: '10%',
    right: 0,
    position: 'absolute',
    fontSize: '3rem',
    width: '50%',
    height: '25%',
    textAlign: 'center',
    transform: 'skew(-45deg)',
    marginRight: 'calc(25vh/-2)',
    paddingRight: 'calc(25vh/2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1024px)': {
      width: '100%',
      fontSize: '1.8rem',
    },
  },
  jobTitleText: {
    transform: 'skew(45deg)',
    display: 'block',
    color: '#fff',
  },
  buttonDiv: {
    alignSelf: 'center',
  },
  ctaBtn: {
    color: '#fff',
  },
}));

const Landing = (ref) => {
  const classes = useStyles();
  const landingRef = useRef(null);

  useEffect(() => {
    // Name and title

    TweenMax.from('#nameDiv ', 2, {
      delay: 2,
      opacity: 0,
      x: '-50vw',
      ease: Power3.easeInOut,
    });

    TweenMax.from('#jobTitleDiv ', 2, {
      delay: 2,
      opacity: 0,
      x: '50vw',
      ease: Power3.easeInOut,
    });

    // // Circles
    // TweenMax.from('#ellipseContainer', 1, {
    //   delay: 2,
    //   opacity: 0,
    //   ease: Expo.easeInOut,
    // });

    // TweenMax.from('#colorEllipse', 1, {
    //   delay: 3.5,
    //   opacity: 0,
    //   ease: Expo.easeInOut,
    // });
  }, []);

  const landingIntersection = useIntersection(landingRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const fixateNav = (element) => {
    if (document.getElementById('navBar').style.position !== 'fixed') {
      gsap.fromTo(
        element,
        1,
        { y: '-64' },
        {
          y: 0,
          position: 'fixed',
          ease: 'power4.out',
        }
      );
    }
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
  React.createRef();

  return (
    <section id='landing' className={classes.landingSection} ref={landingRef}>
      <div className={classes.wrapper}>
        <div id='nameDiv' className={classes.nameDiv}>
          <span className={classes.name}>Zac Eckert</span>
        </div>

        <div id='buttonDiv' className={classes.buttonDiv}>
          <Button
            variant='contained'
            color='primary'
            href='#about'
            className={classes.ctaBtn}
          >
            Learn more about me
          </Button>
        </div>

        <div id='jobTitleDiv' className={classes.jobTitleDiv}>
          <span className={classes.jobTitleText}>Front End Developer</span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
