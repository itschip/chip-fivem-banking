import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3583CA',
    },
    background: {
      paper: '#EEEEEE',
      default: '#EEEEEE',
    },
  },
});

export const useTheme = () => {
  return lightTheme;
};
