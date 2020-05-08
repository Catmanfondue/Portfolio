import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TweenMax, Power3 } from 'gsap';
import Grid from '@material-ui/core/Grid';
import CodingPic from '../../assets/coding1.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  landingDiv: {
    padding: '1rem',
  },
  myName: {
    textAlign: 'center',
  },
  photo: {
    width: 400,
    height: 609,
  },
  tagLine: {
    margin: 0,
  },
}));

const Landing = () => {
  const classes = useStyles();
  // let Name = useRef(null);
  // let tagLine1 = useRef(null);
  let tagLine2 = useRef(null);
  let tagLine3 = useRef(null);
  let contactBtn = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [tagLine2, tagLine3, contactBtn],
      0.5,
      {
        opacity: 0,
        x: -40,
        ease: Power3.easeOut,
        delay: 1,
      },
      1.5
    );
  }, []);

  return (
    <React.Fragment>
      <Grid
        id='landing'
        container
        className={classes.landingDiv}
        direction='row'
        justify='center'
        alignItems='stretch'
      >
        <Grid
          container
          item
          xs={9}
          alignItems='flex-start'
          direction='column'
          spacing={3}
        >
          <Grid item>
            <h1>Hello, I'm Zac, a Web Developer.</h1>
          </Grid>
          <Grid item>
            <h2 ref={(el) => (tagLine2 = el)} className={classes.tagLine}>
              Creating a website doesn't need to be hard.
            </h2>
            <h2 ref={(el) => (tagLine3 = el)} className={classes.tagLine}>
              I'm here to help.
            </h2>
          </Grid>
          <Grid item>
            <Link to='/contact'>
              <Button
                ref={(el) => (contactBtn = el)}
                variant='contained'
                color='primary'
              >
                Contact Me
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container item xs={3} justify='flex-end'>
          <Grid item className='pictureContainer'>
            <img className={classes.photo} alt='Coding' src={CodingPic} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Landing;
