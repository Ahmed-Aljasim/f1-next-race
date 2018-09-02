const styles = theme => ({
  // Spinner
  progress: {
    margin: theme.spacing.unit * 2,
    color: 'red'
  },
  // Main
  paper: {
    padding: theme.spacing.unit * 3,
    margin: 0,
    background: 'red'
  },
  title: {
    marginBottom: theme.spacing.unit * 2.5,
    color: 'white'
  },
  inPaper: {
    padding: theme.spacing.unit * 3
  },
  raceTitle: {
    marginBottom: theme.spacing.unit * 1.3
  },
  raceSubTitle: {
    marginBottom: theme.spacing.unit * 2.5
  },
  // TimeField
  timeSq: {
    textAlign: 'center',
    padding: theme.spacing.unit * 1.3
  }
});

export default styles;
