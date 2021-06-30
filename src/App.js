import './App.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import Person from './Components/Person';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();
  const [persons, setPersons] = useState(null);
  const apiURL = "https://finalspaceapi.com/api/v0/character/";

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    // console.log(response.data.slice(0,12));
    setPersons(response.data.slice(0,12));
  }

  useEffect (() => {
    fetchData();
  },[]);

  return (
    <div className="App">
      <h1>Assignment 6</h1>
      <h2>Final Space API</h2>

      <Grid container spacing={3} className={classes.root} > 
        {persons &&
          persons.map((person, index) => {
            return (   
                <Person person = {person} key = {index}/>
            );
          })}
        </Grid>
   </div>
  
  );
}

export default App;
