import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#e1ad01',
    },
  },
});

export default function ContactMeBtn() {
  return (
    <ThemeProvider theme={theme}>
        <Button 
            style={{
                backgroundColor: 'transparent',
                border: '2px solid #fff',
                borderRadius: '25px',
                boxSizing: 'border-box',
                color: '#fff',
                fontWeight: '650'
            }}
            variant='contained'
            color='secondary'
            onClick={() => {
                console.log('clicked!');
            }}
        >
            Contact Me
        </Button>
    </ThemeProvider>
  );
};