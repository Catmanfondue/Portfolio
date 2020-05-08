import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  contactMe: {
    backgroundColor: '#efefef ',
    color: '#000',
    height: '100vh',
  },
  rightSide: {
    backgroundColor: '#ccc',
  },
});

const ContactMe = () => {
  const classes = useStyles();
  return (
    <Grid id='contactMe' container item className={classes.contactMe}>
      <Grid item xs={4}>
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          molestias tempora quam, quos officiis doloribus. Obcaecati ipsa
          expedita blanditiis dignissimos, deserunt minus autem vel dicta ipsum
          dolore ut fugit corporis.
        </p>
      </Grid>
      <Grid item xs={8} className={classes.rightSide}>
        <h2>Hello</h2>
      </Grid>
    </Grid>
  );
};

export default ContactMe;
