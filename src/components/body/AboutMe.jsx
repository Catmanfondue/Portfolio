import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PicOfMe from '../../assets/ZacEckert.jpg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  aboutMeDiv: {
    opacity: 0,
    paddingTop: 100,
    marginTop: 1,
    height: '100vh',
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
    // gsap.to(element, 1, {
    //   opacity: 0,
    //   y: -20,
    //   ease: 'power4.out',
    // });
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
      <section
        id='about'
        ref={aboutRef}
        className={classes.aboutMeDiv + ' aboutFadeIn'}
      >
        <h1>About Me</h1>
        <div className={classes.aboutContent}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim
            voluptates quis quod, adipisci dicta doloribus iste a. Veniam nisi
            praesentium, nulla doloremque tenetur nemo. Blanditiis aperiam
            delectus odit fugit sit aliquid eos fugiat vitae, commodi, iste
            sapiente voluptates qui.
          </div>
          <div>
            <Avatar src={PicOfMe} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
