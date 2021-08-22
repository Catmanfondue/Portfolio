import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import PicOfMe from '../../assets/ZacEckert.jpg';
import Avatar from '@material-ui/core/Avatar';
import WaveDivider from '../dividers/WaveDivider';

const useStyles = makeStyles((theme) => ({
  aboutMeDiv: {
    marginTop: 1,
    height: '100vh',
    display: 'flex',
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
    marginBottom: 50,
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
    },
  },
  aboutLeft: {
    flex: '.5',
    alignSelf: 'center',
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
    width: '40%',
    height: 'unset',
    // paddingBottom: '25%',
    margin: 'auto',
  },
  aboutMeDesc: {
    fontSize: '1.5rem',
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
 
        <WaveDivider />
        <h1>About Me</h1>
        <div className={classes.aboutContent + ' aboutFadeIn'}>
          <div className={classes.aboutLeft}>
            <p className={classes.aboutMeDesc}>
              Hello, my name is Zac Eckert. I graduated with an associate's degree in Software
              Development from Northeast Wisconsin Technical College. Since then, I have been a fulltime developer since 2018 and have loved every bit of it. 
              <br />
              <br />
              Outside of work, you can often find me staying active by playing
              basketball or strength training at the gym. I also enjoy taking my
              dog on walks and spending time outside. More causally, I visit
              local coffee shops to develop side projects or learn new tech!
            </p>
          </div>
          <div className={classes.aboutRight}>
            <Avatar src={PicOfMe} className={classes.photo} />
          </div>
        </div>
      </section>
  );
};

export default AboutMe;
