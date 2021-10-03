import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import PicOfMe from '../../assets/ZacEckert.jpeg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  aboutMeDiv: {
    height: '100vh',
    display: 'flex',
    paddingTop: 80,
    flexDirection: 'column',
    '@media (max-width: 1024px)': {
      height: 'unset',
    },
    backgroundColor: theme.palette.background.default,
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    opacity: 0,
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
    },
  },
  aboutLeft: {
    flex: '.5',
    display: 'grid',
    height: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: '1rem',
  },
  aboutRight: {
    flex: '.5',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  photo: {
    width: '60%',
    height: 'unset',
    // paddingBottom: '25%',
    margin: 'auto',
  },
  aboutMeDesc: {
    fontSize: '1.5rem',
    margin: 0,
    '@media (max-width: 1024px)': {
      fontSize: '1rem',
    },
  },
}));
const AboutMe = () => {
  const aboutRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  // threshhold and intersection ratio should equal
  const aboutInterSection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
    setAnimationPlayed(true);
  };

  if (!animationPlayed) {
    if (aboutInterSection && aboutInterSection.intersectionRatio > 0.8) {
      fadeIn('.aboutFadeIn');
    }
  }

  const classes = useStyles();
  return (
      <section id='about' ref={aboutRef} className={classes.aboutMeDiv}>
        <h1>About Me</h1>
        <div className={classes.aboutContent + ' aboutFadeIn'}>
          <div className={classes.aboutLeft}>
            <p className={classes.aboutMeDesc}>
              Hello! My name is Zac and I am a Front End Engineer who currently works out of Salt Lake City. I love learning the latest tech and growing along side ever evolving tech industry.
            </p>

            <p className={classes.aboutMeDesc}>When I'm not working with tech, you can find me spending time with my girlfriend and my dog Roxy. I also love playing basketball, rock climbing, hiking, and working out. </p>
          </div>
          <div className={classes.aboutRight}>
            <Avatar src={PicOfMe} className={classes.photo} />
          </div>
        </div>
      </section>
  );
};

export default AboutMe;
