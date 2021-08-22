import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gsap from 'gsap';

import { TweenMax, Power3 } from 'gsap';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

}));

const WaveDivider = (props) => {
  const classes = useStyles();

  useEffect(() => {
    
  }, []);

  return (
    <div className="spacer">
      {props.children}
    </div>
  );
};

export default WaveDivider;
