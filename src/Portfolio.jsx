import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/nav/Nav';

import Landing from './components/body/Landing';
import AboutMe from './components/body/AboutMe';
import Skills from './components/body/Skills';
import ContactMe from './components/body/ContactMe';

// this is my portofolio website.

const useStyles = makeStyles((theme) => ({}));

const Portfolio = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Landing
          prefersDarkMode={props.prefersDarkMode}
          setPrefersDarkMode={props.setPrefersDarkMode}
        />
        <AboutMe />
        <Skills />
        <ContactMe />
      </main>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
