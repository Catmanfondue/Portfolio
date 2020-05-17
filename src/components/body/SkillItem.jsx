import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import gsap, { Power3 } from 'gsap';

// possible imporvement is to have list on left and right and card in center that populates when element is hovered

const useStyles = makeStyles((theme) => ({
  skillCard: {
    padding: '1rem',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: '100%',
    '@media (max-width: 1024px)': {
      padding: 0,
      flexBasis: '50%',
    },
  },
  cardTitle: {
    margin: 0,
    textAlign: 'center',
  },
  skillCardImg: {
    margin: 'auto',
    width: '50%',
  },
  skillImgContainer: {
    display: 'flex',
    flex: '1',
  },
  skillDescContainer: {
    // flex: '.6',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
}));

const SkillItem = (props) => {
  const images = require.context('../../assets/codingLanguages', true);

  let image = images(`./${props.skill}.png`);
  let title = props.skill;

  if (props.skill === 'cSharp') {
    title = 'C#';
  }

  if (
    props.skill === 'html' ||
    props.skill === 'css' ||
    props.skill === 'sql'
  ) {
    title = props.skill.toUpperCase();
  }

  const classes = useStyles();

  return (
    <div id='skillCard' className={classes.skillCard}>
      <div id='skillImgContainer' className={classes.skillImgContainer}>
        <img
          className={classes.skillCardImg}
          id='skillImgPic'
          src={image}
          alt={title}
        />
      </div>
      <div id='skillDescContainer' className={classes.skillDescContainer}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SkillItem;