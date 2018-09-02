// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Ui core
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// Material Ui style
import { withStyles } from '@material-ui/core/styles';

// style
import styles from './styles';

const Spinner = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container justify="space-around">
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
