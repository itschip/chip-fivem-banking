import { createMuiTheme } from '@material-ui/core/styles';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#263238'
    },
    background: {
      paper: '#4f5b62',
      default: '#4f5b62'
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: "'Work Sans', 'sans-serif'"
  }
})

export const useTheme = () => {
  return darkTheme;
}