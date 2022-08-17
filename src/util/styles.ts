import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#F3E600'
      },
      info: {
        main: '#FFF'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 1000,
        lg: 1300,
        xl: 1536
      }
    }
  })
);

const mainStyle = {
  display: 'grid',
  gridTemplateRows: '70px 1fr 70px',
  minHeight: '100vh',
  gap: '30px'
};
const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #F3E600',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2
};
const error = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'white',
  color: 'black',
  border: '3px solid #F3E600',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4
};

export { mainStyle, error, theme, modalStyle };
