import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SkillItem from './SkillItem';

const SkillCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    skillCard: {
      margin: 10,
      background: '#fff',
      borderRadius: 4,
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    cardTitle: {
      margin: 0,
      padding: 10,
      textAlign: 'left',
      borderBottom: props.borderColor + ' solid 3px',
    },
    skillCardImg: {
      margin: 'auto',
      width: '50%',
      padding: 10,
      display: 'block',
    },
    skillImgContainer: {},
    skillDescContainer: {
      // flex: '.6',
      display: 'flex',
      alignItems: 'center',
    },
    skillsContainer: {
      display: 'flex',
      '@media (max-width: 1024px)': {
        flexWrap: 'wrap',
        maxHeight: '50vh',
      },
    },
  }));
  const classes = useStyles();

  let skills = [];

  if (props.name === 'Front End') {
    skills = ['react', 'javascript', 'html', 'css', 'sass', 'jquery'];
  } else if (props.name === 'Back End') {
    skills = ['sql', 'node', 'perl', 'mongo', 'cSharp'];
  }

  return (
    <div className={classes.skillCard} key={props.name}>
      <h2 className={classes.cardTitle}>{props.name}</h2>
      <div className={classes.skillsContainer}>
        {skills.map((skill) => {
          return <SkillItem key={skill} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillCard;
