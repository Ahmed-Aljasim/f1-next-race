import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: 'red'
  }
});

function Spinner(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container alignItems="stretch" justify="space-around" direction="row">
        <Grid item>
          <CircularProgress className={classes.progress} size={50} />
        </Grid>
      </Grid>
    </div>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spinner);