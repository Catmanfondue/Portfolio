import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PicOfMe from '../../assets/ZacEckert.jpg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  aboutMeDiv: {
    padding: '100px 20px 0 20px',
    marginTop: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    opacity: 0,
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
    width: 300,
    height: 300,
    margin: 'auto',
  },
}));
const AboutMe = () => {
  const aboutRef = useRef(null);

  // threshhold and intersection ratio should equal
  const aboutInterSection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };

  aboutInterSection && aboutInterSection.intersectionRatio > 0.8
    ? //  reached
      fadeIn('.aboutFadeIn')
    : // not Reached
      fadeOut('.aboutFadeIn');
  const classes = useStyles();
  return (
    <React.Fragment>
      <section id='about' ref={aboutRef} className={classes.aboutMeDiv}>
        <h1>About Me</h1>
        <div className={classes.aboutContent + ' aboutFadeIn'}>
          <div className={classes.aboutLeft}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim
            voluptates quis quod, adipisci dicta doloribus iste a. Veniam nisi
            praesentium, nulla doloremque tenetur nemo. Blanditiis aperiam
            delectus odit fugit sit aliquid eos fugiat vitae, commodi, iste
            sapiente voluptates qui.
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
