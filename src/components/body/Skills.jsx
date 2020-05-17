import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillCard from './SkillCard';

const useStyles = makeStyles((theme) => ({
  skillsDiv: {
    backgroundColor: '#e0e0e0',
    color: '#000',
    padding: '100px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    margin: '1rem',
  },
}));

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section id='skills' className={classes.skillsDiv}>
      <h1>Skills</h1>

      <div className={classes.wrapper}>
        <SkillCard name='Front End' borderColor={theme.palette.primary.main} />
        <SkillCard name='Back End' borderColor={theme.palette.secondary.main} />
      </div>
    </section>
  );
};

export default Skills;
