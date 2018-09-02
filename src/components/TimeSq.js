// React
import React from 'react';
import PropTypes from 'prop-types';

// Material Ui core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Material Ui style
import { withStyles } from '@material-ui/core/styles';

// style
import styles from './styles';

const TimeSq = props => {
  const { classes, value, text } = props;

  return (
    <Grid item className={classes.timeSq} xs={6} sm={3}>
      <Typography variant="title" color="inherit">{value}</Typography>
      <Typography variant="body1" color="inherit">{text}</Typography>
    </Grid>
  );
}

TimeSq.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(TimeSq);
