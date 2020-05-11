import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  skillsDiv: {
    height: '100vh',
  },
  rightSide: {},
});

const Skills = () => {
  const classes = useStyles();
  return (
    <Grid id='skills' container item className={classes.skillsDiv}>
      <Grid item xs={4}>
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Javascript</li>
          <li>JSON</li>
          <li>JQuery</li>
          <li>Node</li>
          <li>SQL</li>
          <li>Perl</li>
        </ul>
      </Grid>
      <Grid item xs={8} className={classes.rightSide}>
        <h2>Hello</h2>
      </Grid>
    </Grid>
  );
};

export default Skills;
