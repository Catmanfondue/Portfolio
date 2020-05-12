import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// images
import FullTime from '../../assets/fullTime.jpg';
import FreeLance from '../../assets/freeLance.jpg';
import Voulenteer from '../../assets/voulenteer.jpg';

const useStyles = makeStyles((theme) => ({
  contactMe: {
    padding: '100px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 20,
  },
  child: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  checkeredImageDiv: {
    flex: '.5',
    width: '100%',
  },
  checkeredDescDiv: {
    flex: '.5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rowTitle: {
    textAlign: 'center',
    margin: 0,
    borderBottom: '3px solid ' + theme.palette.secondary.main,
  },
  descContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 30px 30px 30px',
    justifyContent: 'space-around',
    fontSize: '1.2rem',
  },
  descText: {
    // margin: 'auto',
  },
  email: {
    borderBottom: '3px solid ' + theme.palette.primary.main,
  },
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <section id='contactMe' className={classes.contactMe}>
      <h1>Contact Me</h1>
      <h3 style={{ textAlign: 'center' }}>
        For any of the following, the best way to reach me is via my email at{' '}
        <span className={classes.email}>zaceckert74@gmail.com</span>
      </h3>

      <div className={classes.container}>
        {/* Full Time */}
        <div className={classes.child}>
          <div className={classes.checkeredImageDiv}>
            <img
              src={FullTime}
              alt='Full Time Work'
              className={classes.image}
            />
          </div>
          <div className={classes.checkeredDescDiv}>
            <div className={classes.descContent}>
              <h2 className={classes.rowTitle}>Full Time Opportunities</h2>
              <p className={classes.descText}>
                I am planning a move out of my hometown of Green Bay, Wisconsin
                and am actively looking for Front-End and Full-Stack job
                opportunities in the following areas:
              </p>
              <ul>
                <li>Denver, Colorado</li>
                <li>Salt Lake City, Utah</li>
                <li>Minneapolis, Minnesota</li>
              </ul>

              <a
                href='/static/media/Eckert_Resume.6d10ee19.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant={'contained'} color={'primary'}>
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* Free Lance */}
        <div className={classes.child}>
          <div className={classes.checkeredDescDiv}>
            <div className={classes.descContent}>
              <h2 className={classes.rowTitle}>Freelance Opportunities</h2>
              <p className={classes.descText}>
                I am always open to Freelance opportunities and would love to
                help you share your idea or product with the world. It's
                important to me to make sure that the websites I create are:
              </p>
              <ul>
                <li>Mobile Friendly</li>
                <li>Fast</li>
                <li>User Friendly</li>
              </ul>
            </div>
          </div>
          <div className={classes.checkeredImageDiv}>
            <img src={FreeLance} alt='Freelance' className={classes.image} />
          </div>
        </div>
        {/* Voulenteer */}
        <div className={classes.child}>
          <div className={classes.checkeredImageDiv}>
            <img src={Voulenteer} alt='Voulenteer' className={classes.image} />
          </div>
          <div className={classes.checkeredDescDiv}>
            <div className={classes.descContent}>
              <h2 className={classes.rowTitle}>Voulenteer Opportunities</h2>
              <p className={classes.descText}>
                I personally wish that I was exposed to technology and
                programming when I was younger. Both my mother and my partner
                are educators and I would love the chance to share my knowledge
                with someone who wants to learn more about programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
