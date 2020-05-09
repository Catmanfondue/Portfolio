import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  aboutMeDiv: {},
  rightSide: {},
});

const AboutMe = () => {
  const classes = useStyles();
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
            <h1>About Me</h1>
            <p></p>
          </Grid>
        </Grid>
        <Grid container item xs={3} justify='flex-end'>
          <Grid item>{/* image */}</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AboutMe;
