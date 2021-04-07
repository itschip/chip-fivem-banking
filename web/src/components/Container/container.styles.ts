import { makeStyles, Theme } from '@material-ui/core/styles';

export const containerStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#fff',
    border: '2px solid #000',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingLeft: 75,
    width: 1200,
    height: 700,
  },
}));
