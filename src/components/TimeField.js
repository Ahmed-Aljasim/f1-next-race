import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class TimeField extends Component {
  state = {
    d: '',
    h: '',
    m: '',
    s: '',
    initDelay: true
  }

  calTime = () => {
    const now = new Date();

    // Current time
    const cH = now.getUTCHours();
    const cM = now.getUTCMinutes();
    const cS = now.getUTCSeconds();

    // Race time
    const raceTime = this.props.time;
    const t = raceTime.split(':');

    // Current date
    const currentDate = now.toISOString().split('T')[0];
    const c = currentDate.split('-');
    // Months are zero based
    c[1] = c[1] - 1;

    // Race date
    const raceDate = this.props.date;
    const r = raceDate.split('-');
    // Months are zero based
    r[1] = r[1] - 1;

    // Create moment object and find the diff
    const x = new moment({ y: r[0], M: r[1], d: r[2], h: t[0], m: t[1], s: 0, ms: 0 });
    const y = new moment({ y: c[0], M: c[1], d: c[2], h: cH, m: cM, s: cS, ms: 0 });
    const duration = moment.duration(x.diff(y));
    
    let monthsToDays = 0;
    // duration._data.months should be converted to days
    if (duration._data.months !== 0 ) monthsToDays = Math.abs(moment().diff(raceDate, 'days'));

    // Set the states to the new values
    this.setState({
      d: duration._data.days + monthsToDays, 
      h: duration._data.hours,
      m: duration._data.minutes,
      s: duration._data.seconds
    });
  }

  componentDidMount() {
    // Will be true only at the first render
    if (this.state.initDelay) {
      this.calTime();
      this.setState({ initDelay: false });
    }

    setInterval(() => this.calTime(), 1000);
  }

  render() {
    return (
      <Grid container alignItems="stretch" justify="space-around">
        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            {this.state.d}
          </Typography>
          d
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            {this.state.h}
          </Typography>
          h
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            {this.state.m}
          </Typography>
          m
        </Grid>

        <Grid item style={{ textAlign: 'center', padding: 10 }} xs={2}>
          <Typography variant="title" color="inherit">
            {this.state.s}
          </Typography>
          s
        </Grid>
      </Grid>
    )
  }
}

export default TimeField;
