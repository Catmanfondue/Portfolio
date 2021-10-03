import React, { useState } from 'react';
import './App.scss';
import Portfolio from './Portfolio';
import { Paper, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  let isUsingDarkMode =
    localStorage.getItem('prefersDarkMode') === 'false' ? false : true;

  const [prefersDarkMode, setPrefersDarkMode] = useState(isUsingDarkMode);

  const makeTheme = () => {
    let renderedTheme;
    let palleteType = 'light';
  
    if (prefersDarkMode) {
      palleteType = 'dark';
    }

    renderedTheme = createMuiTheme({
      palette: {
        type: palleteType,
        primary: {
          main: '#222e50',
        },
        secondary: {
          main: '#188b7b',
        },
        background: palleteType === 'dark' ? {
          default: '#001220',
          secondary: '#424242',
        } : {
          default: '#e3e3e3',
          secondary: '#DBF9F0'
        }
      },
    });

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
