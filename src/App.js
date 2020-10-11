import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Subscribe from "./components/Subscribe";
import CurrentLocation from "./components/CurrentLocation";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import GetLoaction from './components/GetLoaction';
import './App.css';

function App() {

    const [city,setCity] = useState('');
    const [weather, setWeather] = useState({description:'' , icon:''});

    function changeGlobalCity(currCity){
      setCity(currCity);
    }

    // Url to fetch weather data from
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77f89854c57f52abf424c8eb9b13714c`;
    
    // Fetches the data once 'city' is updated and updates weather object
    useEffect(()=>{
      axios.get(url)
      .then(res => {
        const currData = res.data.weather[0];
        setWeather({
          description: currData.description,
          iconImg: "http://openweathermap.org/img/wn/"+currData.icon+"@2x.png"
        });
      });
    },[city,url]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
            <GetLoaction changeGlobalCity={changeGlobalCity}/>
            <span>
              <img src={weather.iconImg} alt="weather icon"/>
              <h3>{weather.description}</h3>
            </span>
            </header>
          </div>
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/current-location">
          <CurrentLocation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
