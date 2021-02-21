import { makeStyles, Theme } from '@material-ui/core/styles';

export const headerStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    height: '100%',
  },
  details: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    paddingLeft: '12px',
    cursor: 'pointer',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    transition: '.2s',
    '&:hover': {
      background: '#eee',
      color: '#232323',
    },
  },
  itemText: {
    paddingLeft: '12px',
    fontWeight: 500,
  },
}));
