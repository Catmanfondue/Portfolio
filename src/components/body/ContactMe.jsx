import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import Button from '@material-ui/core/Button';

// images
import FullTime from '../../assets/fullTime.jpg';
import FreeLance from '../../assets/freeLance.jpg';
import volunteer from '../../assets/volunteer.jpg';
import Resume from '../../assets/Eckert_Resume.pdf';

const useStyles = makeStyles((theme) => ({
  contactMe: {
    padding: '100px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 20,
  },
  child: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
  },
  inverseChild: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
    },
  },
  checkeredImageDiv: {
    flex: '.5',
    width: '100%',
  },
  checkeredDescDiv: {
    flex: '.5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rowTitle: {
    textAlign: 'center',
    margin: 0,
    borderBottom: '3px solid ' + theme.palette.secondary.main,
  },
  contactDesc: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  descContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 30px 30px 30px',
    justifyContent: 'space-around',
    fontSize: '1.2rem',
    '@media (max-width: 1024px)': {
      padding: '30px 0',
    },
  },
  descText: {
    // margin: 'auto',
  },
  email: {
    borderBottom: '3px solid ' + theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
}));

const ContactMe = () => {
  const [fullTimeAnimated, setFullTimeAnimated] = useState(false);
  const [freeLanceAnimated, setFreeLanceAnimated] = useState(false);
  const [volunteerAnimated, setvolunteerAnimated] = useState(false);

  const classes = useStyles();

  const fullTimeDivRef = useRef(null);
  const freeLanceDivRef = useRef(null);
  const volunteerDivRef = useRef(null);

  // threshhold and intersection ratio should equal
  const fullTimeIntersection = useIntersection(fullTimeDivRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  const freeLanceIntersection = useIntersection(freeLanceDivRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  const volunteerIntersection = useIntersection(volunteerDivRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  const fadeOut = (element) => {
    gsap.to('#' + element + 'Left', 1, {
      opacity: 0,
      x: -30,
      ease: 'power4.out',
    });

    gsap.to('#' + element + 'Right', 1, {
      opacity: 0,
      x: 30,
      ease: 'power4.out',
    });
  };

  const fadeIn = (element) => {
    gsap.to('#' + element + 'Left', 1, {
      opacity: 1,
      x: 0,
      ease: 'power4.out',
    });

    gsap.to('#' + element + 'Right', 1, {
      opacity: 1,
      x: 0,
      ease: 'power4.out',
    });
  };

  if (fullTimeIntersection && !fullTimeAnimated) {
    if (fullTimeIntersection.intersectionRatio > 0.4) {
      fadeIn('fullTime');
      setFullTimeAnimated(true);
    } else {
      fadeOut('fullTime');
    }
  }

  if (freeLanceIntersection && !freeLanceAnimated) {
    if (freeLanceIntersection.intersectionRatio > 0.4) {
      fadeIn('freeLance');
      setFreeLanceAnimated(true);
    } else {
      fadeOut('freeLance');
    }
  }

  if (volunteerIntersection && !volunteerAnimated) {
    if (volunteerIntersection.intersectionRatio > 0.4) {
      fadeIn('volunteer');
      setvolunteerAnimated(true);
    } else {
      fadeOut('volunteer');
    }
  }

  return (
    <section id='contactMe' className={classes.contactMe}>
      <h1>Contact Me</h1>
      <h3 className={classes.contactDesc}>
        For any of the following, the best way to reach me is via my email at{' '}
        <a href='mailto:zaceckert74@gmail.com' className={classes.email}>
          zaceckert74@gmail.com
        </a>
      </h3>

      <div className={classes.container}>
        {/* Full Time */}
        <div id='fullTime' ref={fullTimeDivRef} className={classes.child}>
          <div className={classes.checkeredImageDiv}>
            <img
              id='fullTimeLeft'
              src={FullTime}
              alt='Full Time Work'
              className={classes.image}
            />
          </div>
          <div className={classes.checkeredDescDiv}>
            <div id='fullTimeRight' className={classes.descContent}>
              <h2 className={classes.rowTitle}>Full Time Positions</h2>
              <p className={classes.descText}>
                I love working remote. If you have a   
              </p>
              
              <a href={Resume} target='_blank' rel='noopener noreferrer'>
                <Button variant={'contained'} color={'primary'}>
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* Free Lance */}
        <div
          id='freeLance'
          ref={freeLanceDivRef}
          className={classes.inverseChild}
        >
          <div className={classes.checkeredDescDiv}>
            <div id='freeLanceLeft' className={classes.descContent}>
              <h2 className={classes.rowTitle}>Freelance Projects</h2>
              <p className={classes.descText}>
                I am always open to freelance projects and I am eager to help
                you share your idea or product with the world. It's important to
                me to make sure that your website will be:
              </p>
              <ul>
                <li>Fast</li>
                <li>Mobile Friendly</li>
                <li>User Friendly</li>
              </ul>
            </div>
          </div>
          <div className={classes.checkeredImageDiv}>
            <img
              id='freeLanceRight'
              src={FreeLance}
              alt='Freelance'
              className={classes.image}
            />
          </div>
        </div>
        {/* volunteer */}
        <div id='volunteer' ref={volunteerDivRef} className={classes.child}>
          <div className={classes.checkeredImageDiv}>
            <img
              id='volunteerLeft'
              src={volunteer}
              alt='volunteer'
              className={classes.image}
            />
          </div>
          <div className={classes.checkeredDescDiv}>
            <div id='volunteerRight' className={classes.descContent}>
              <h2 className={classes.rowTitle}>Volunteer Opportunities</h2>
              <p className={classes.descText}>
                Technology is an ever-evolving industry. I would have benefited
                tremendously from an early introduction and experimentation with
                programming. I am highly interested in helping youth today
                discover the in’s and out’s of programming.
              </p>
              <p className={classes.descText}>
                My mother and my partner are educators, so I have some guidance
                in establishing age-appropriate and engaging tech lessons. I am
                eager to share my knowledge of programming with youth!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
