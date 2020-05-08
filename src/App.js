import React, { useState } from 'react';
import './App.scss';
import Portfolio from './Portfolio';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  // if local storage has nothing, or is set to false, return false
  // useMediaQuery is another approach
  let isUsingDarkMode =
    localStorage.getItem('prefersDarkMode') === null ||
    localStorage.getItem('prefersDarkMode') === 'false'
      ? false
      : true;

  const [prefersDarkMode, setPrefersDarkMode] = useState(isUsingDarkMode);

  const makeTheme = () => {
    let renderedTheme;
    if (prefersDarkMode) {
      renderedTheme = createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#D95D39',
          },
          secondary: {
            main: '#F0A202',
          },
        },
      });
    } else {
      renderedTheme = createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#D95D39',
          },
          secondary: {
            main: '#F0A202',
          },
        },
      });
    }
    return renderedTheme;
  };

  const theme = makeTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper>
          <Portfolio
            prefersDarkMode={prefersDarkMode}
            setPrefersDarkMode={setPrefersDarkMode}
          />
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
