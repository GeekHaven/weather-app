import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Subscribe from "./components/Subscribe";
import CurrentLocation from "./components/CurrentLocation";
import Home from "./components/Home";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Graph from "./components/Graph";

function App() {

    const [cityData,setCityData] = useState({city:'',lat:'',lon:''});
    const [weather, setWeather] = useState({});

    function changeGlobalCityData(currCityData){
      setCityData(currCityData);
    }

    // Url to fetch weather data from
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityData.city}&units=metric&appid=77f89854c57f52abf424c8eb9b13714c`;
    
    // Fetches the data once 'city' is updated and updates weather object
    useEffect(()=>{
      axios.get(url)
      .then(res => {
        const currData = res.data;
        setWeather(currData);
      });
    },[cityData,url]);

  return (
    <div className="App">
      <Header />
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home data={weather} changeGlobalCityData={changeGlobalCityData}/>
          <Graph cityData={cityData} />
        </Route>
        <Route path="/search" exact component={Search}>
          <Search />
        </Route>
        <Route path="/subscribe" exact component={Subscribe}>
          <Subscribe />
        </Route>
        <Route path="/current-location">
          <CurrentLocation />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
