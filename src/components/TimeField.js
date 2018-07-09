import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class TimeField extends Component {
  render() {
    return (
      <Grid container alignItems="stretch" justify="space-around">

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            11
          </Typography>
          days
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            22
          </Typography>
          hours
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            33
          </Typography>
          mins
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            33
          </Typography>
          secs
        </Grid>

      </Grid>
    )
  }
}

export default TimeField;
