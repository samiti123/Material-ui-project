import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: '20px', // is equal with theme.spacing(2)
  },
  buttons: {
    marginTop: '40px',
  },
}));

export default useStyles;
