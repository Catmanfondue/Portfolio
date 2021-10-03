import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getYOE from '../../utils/getYOE';

const useStyles = makeStyles((theme) => ({
  skillsSection: {
    height: '100vh',
    display: 'flex',
    paddingTop: 80,
    flexDirection: 'column',
    '@media (max-width: 1024px)': {
      height: 'unset',
    },
    backgroundColor: theme.palette.background.default,
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <section id='skills' className={classes.skillsSection}>
      <h1>My Skills / Technologies</h1>
      <h2>I have been a Front End Engineer for {getYOE()} years</h2>
    </section>
  );
};

export default Skills;
