import { makeStyles, Theme } from '@material-ui/core/styles';

export const containerStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#232323',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 700,
  },
}));
