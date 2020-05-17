import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import PicOfMe from '../../assets/ZacEckert.jpg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  aboutMeDiv: {
    padding: '100px 20px 0 20px',
    marginTop: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1024px)': {
      height: 'unset',
    },
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

  // const fadeOut = (element) => {
  //   gsap.to(element, 1, {
  //     opacity: 0,
  //     y: -20,
  //     ease: 'power4.out',
  //   });
  // };

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
    // only want to play once
    // else {
    //   fadeOut('.aboutFadeIn');
    // }
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <section id='about' ref={aboutRef} className={classes.aboutMeDiv}>
        <h1>About Me</h1>
        <div className={classes.aboutContent + ' aboutFadeIn'}>
          <div className={classes.aboutLeft}>
            <p className={classes.aboutMeDesc}>
              Hello, my name is Zachary Eckert. I am a Front-End developer from
              Green Bay, Wisconsin. I have an an associate's degree in Software
              Development from Northeast Wisconsin Technical College.
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
    </React.Fragment>
  );
};

export default AboutMe;
