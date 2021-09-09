import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'

import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    texAlgin: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // flexWrap: "wrap"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  bigSpace: {
    marginTop: "5rem",
  }
})

function App() {
  const classes = styles()
  const btnStyle = {height: "125", width: "125"};
  return (<div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid title="Demolish" icon={<SecurityIcon style={{...btnStyle, fill: "#ff0000"}}/>} btnTitle="btnTitle" />
          <Grid title="Build" icon={<TrendingUpIcon style={{...btnStyle, fill: "#00ff33"}}/>} btnTitle="Tren Up" />
          <Grid title="Build" icon={<TrendingUpIcon style={{...btnStyle, fill: "#2ff0f3"}}/>} btnTitle="Tren Up" />
        </div>


        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid title="Demolish" icon={<SecurityIcon style={{...btnStyle, fill: "#ff0000"}}/>} btnTitle="btnTitle" />
          <Grid title="Build" icon={<TrendingUpIcon style={{...btnStyle, fill: "#00ff33"}}/>} btnTitle="Tren Up" />
          <Grid title="Build" icon={<TrendingUpIcon style={{...btnStyle, fill: "#2ff0f3"}}/>} btnTitle="Tren Up" />
        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
