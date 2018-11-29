// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Axios
import axios from 'axios';

// Material Ui core
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Material Ui style
import { withStyles } from '@material-ui/core/styles';

// Components
import TimeField from './TimeField';
import Spinner from './Spinner';

// style
import styles from './styles';

class Main extends Component {
  state = {
    raceName: '',
    date: '',
    time: '',
    loading: true
  }

  async componentDidMount() {
    await axios
      .get('https://ergast.com/api/f1/2019.json')
      .then(res => {
        const { Races } = res.data.MRData.RaceTable;

        const racesDateTime = Races.map(({ date, time }) => (
          {
            date,
            time
          }
        ));

        const now = new Date();
        let closest = Infinity;

        racesDateTime.forEach(({ date, time }) => {
          const timeArray = time.split(':');
          const raceDate = new Date(date);
          raceDate.setUTCHours(timeArray[0]);
          raceDate.setUTCMinutes(timeArray[1]);

          if (raceDate >= now && raceDate < closest) closest = date;
        });

        Races.forEach(({ raceName, date, time }) => {
          if (date === closest)
            this.setState({
              raceName,
              date: closest,
              time,
              loading: false
            });
        });

      })
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    const view = (
      <Grid
        container
        alignItems="stretch"
        justify="space-around"
        direction="column"
      >
        <Grid item>
          <Typography
            variant="title"
            color="inherit"
            className={classes.raceTitle}
          >
            {this.state.raceName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.raceTitle}
          >
            {this.state.date}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TimeField date={this.state.date} time={this.state.time} />
        </Grid>
      </Grid>
    );

    return (
      <Paper className={classes.paper}>
        <Typography
          variant="headline"
          color="inherit"
          className={classes.title}
        >
          F1 NEXT RACE COUNTDOWN TIMER
        </Typography>
        <Paper className={classes.inPaper}>
          <Grid container>
            <Grid item xs={12}>
              {this.state.loading ? <Spinner /> : view}
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
