import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  skillsDiv: {
    backgroundColor: '#efefef',
    color: '#000',
    padding: '100px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  rightSide: {},
});

const Skills = () => {
  const classes = useStyles();
  return (
    <section id='skills' className={classes.skillsDiv}>
      <h1>Skills</h1>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>Javascript</li>
      <li>JSON</li>
      <li>JQuery</li>
      <li>Node</li>
      <li>SQL</li>
      <li>Perl</li>
    </section>
  );
};

export default Skills;
