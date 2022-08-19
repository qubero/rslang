import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#000000'
      },
      secondary: {
        main: '#FDF500'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1440
      }
    }
  })
);

export { theme };
