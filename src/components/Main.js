import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import TimeField from './TimeField';

class Main extends Component {
  state = {
    date: '',
    name: '',
  }

  componentDidMount() {
    axios
      .get('https://ergast.com/api/f1/current.json')
      .then(res => {
        const races = res.data.MRData.RaceTable.Races;

        const racesDates = races.map(race => race.date);
        const now = new Date();
        let closest = Infinity;
        racesDates.forEach(d => {
          const date = new Date(d);
          if (date >= now && date < closest) closest = d;
        });

        let name = '';
        races.forEach(race => {
          if (race.date === closest) name = race.raceName;
        });

        this.setState({
          date: closest,
          name: name
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Paper style={{ padding: 25, margin: 25, background: 'red' }}>

        <Typography variant="headline" color="inherit" style={{ marginBottom: 20, color: 'white' }}>
          F1 NEXT RACE COUNTDOWN TIMER
        </Typography>

        <Paper style={{ padding: 25 }}>

          <Grid container alignItems="center" justify="center" direction="row">
            <Grid item xs={12}>
              <Grid container alignItems="stretch" justify="space-around" direction="column">

                <Grid item>
                  <Typography variant="title" color="inherit" style={{ marginBottom: 10 }}>
                    {this.state.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subheading" color="inherit" style={{ marginBottom: 20 }}>
                    {this.state.date}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TimeField date={this.state.date} />
                </Grid>

              </Grid>
            </Grid>
          </Grid>

        </Paper>

      </Paper>
    )
  }
}

export default Main;
