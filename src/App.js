// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello Corona
//       </header>
//     </div>
//   );
// }

// export default App;

import {Component} from 'react';
import { Box, withStyles, Typography } from "@material-ui/core";
import logo from './images/COVID19.jpg';
import Cards from './components/Cards.jsx'
import { fetchData } from './sevice/api';
import Countries from "./components/Countries";
import Chart from "./components/chart";

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    background: '#F5F5F5',
    width: 500,
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    // margin: 4,
    color: 'saddlebrown'
  },
  lastUpdate: {
    fontSize: 15,
    color: '#777',
    marginTop: 5,
    marginBottom: 0
  }
}


class App extends Component{

  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }


  render(){
    const {data} = this.state;
    return(
      <Box className = {this.props.classes.container}>
        <Box className = {this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box>
        <Typography className = {this.props.classes.lastUpdate}>Last Updated:  {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style = {{width: 400}} src={logo} alt="covid-19" />
        <Cards data = {data}/>
        <Countries handleCountryChange = {this.handleCountryChange}/>
        <Chart data = {data}/>
      </Box>  
    )
  }
}

export default withStyles(style)(App);