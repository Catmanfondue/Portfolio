import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/nav/Nav';

import Landing from './components/body/Landing';
import AboutMe from './components/body/AboutMe';
import Skills from './components/body/Skills';
import ContactMe from './components/body/ContactMe';
import Footer from './components/body/Footer';

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
