import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import Search from "./components/Search";
import Subscribe from "./components/Subscribe";
import CurrentLocation from "./components/CurrentLocation";
import Home from "./components/Home";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

    const [city,setCity] = useState('');
    const [weather, setWeather] = useState({});

    function changeGlobalCity(currCity){
      setCity(currCity);
    }

    // Url to fetch weather data from
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=77f89854c57f52abf424c8eb9b13714c`;
    
    // Fetches the data once 'city' is updated and updates weather object
    useEffect(()=>{
      axios.get(url)
      .then(res => {
        const currData = res.data;
        setWeather(currData);
      });
    },[city,url]);

  return (
    <React.Fragment>
      <div>
      <Router>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/search">SEARCH</Link></li>
          <li><Link to="/subscribe">SUBSCRIBE</Link></li>
        </ul>
      
        <Switch>
          <Route path="/" exact>
            <Home data={weather} changeGlobalCity={changeGlobalCity} />
          </Route>
          <Route path="/search" exact>≠≠
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
      </div>
    </React.Fragment>
  );
}

export default App;