import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/nav/Nav';

import Landing from './components/body/Landing';
import AboutMe from './components/body/AboutMe';
import Skills from './components/body/Skills';
import ContactMe from './components/body/ContactMe';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// this is my portofolio website.
// cool sections would be about, my work, and reviews
// another cool section is hack me, provide a form and a db table next to it and ask them to attempt to delete the table

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
  },
}));

const Portfolio = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Nav
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          prefersDarkMode={props.prefersDarkMode}
          setPrefersDarkMode={props.setPrefersDarkMode}
          // setDarkTheme={props.setDarkTheme}
          // darkTheme={props.darkTheme}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/About'>
              <AboutMe />
            </Route>
            <Route exact path='/Skills'>
              <Skills />
            </Route>
            <Route exact path='/Contact'>
              <ContactMe />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
