import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { TweenMax, Power3 } from 'gsap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Nav from '../nav/Nav';

const useStyles = makeStyles((theme) => ({
  landingSection: {
    height: 'calc(100vh + 64px)',
  },
  landingDiv: {
    height: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  myName: {
    color: theme.palette.secondary.main,
  },
  tagLine: {
    margin: 0,
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  // let Name = useRef(null);
  // let tagLine1 = useRef(null);
  let tagLine2 = useRef(null);
  let tagLine3 = useRef(null);
  let contactBtn = useRef(null);
  const landingRef = useRef(null);

  useEffect(() => {
    // TweenMax.staggerFrom(
    //   [tagLine2, tagLine3, contactBtn],
    //   0.5,
    //   {
    //     opacity: 0,
    //     x: -40,
    //     ease: Power3.easeOut,
    //     delay: 1,
    //   },
    //   1.5
    // );
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
      <div className={classes.landingDiv + ' flex'}>
        <h1>
          Hello, I'm <span className={classes.myName}>Zac Eckert</span>
        </h1>
        <h1>I'm a Web Developer.</h1>

        {/* <h2 ref={(el) => (tagLine2 = el)} className={classes.tagLine}>
            Creating a website doesn't need to be hard.
          </h2>
          <h2 ref={(el) => (tagLine3 = el)} className={classes.tagLine}>
            I'm here to help.
          </h2> */}
        <a href='#about'>
          <Button ref={contactBtn} variant='outlined' color='primary'>
            New Portfolio who dis?
          </Button>
        </a>

        <Nav
          prefersDarkMode={props.prefersDarkMode}
          setPrefersDarkMode={props.setPrefersDarkMode}
        />
      </div>
    </section>
  );
};

export default Landing;
