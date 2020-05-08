import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  aboutMeDiv: {
    backgroundColor: '#efefef ',
    color: '#000',
    height: '',
  },
  rightSide: {
    backgroundColor: '#ccc',
  },
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid id='aboutMe' container item className={classes.aboutMeDiv}>
        <Grid item xs={4}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            molestias tempora quam, quos officiis doloribus. Obcaecati ipsa
            expedita blanditiis dignissimos, deserunt minus autem vel dicta
            ipsum dolore ut fugit corporis.
          </p>
        </Grid>
        <Grid item xs={8} className={classes.rightSide}>
          <h2>Hello</h2>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AboutMe;
