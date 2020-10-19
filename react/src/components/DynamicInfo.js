import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Details from "./Details";
import Graph from "./Graph";

const container={
    display:"flex",
    marginTop:"120px",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    color:"red",
}

const DynamicInfo = (props) => {
    const [cityData,setCityData] = useState({city:'',lat:'',lon:''});
    const [weather, setWeather] = useState({});
    const city = props.info.match.params.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=77f89854c57f52abf424c8eb9b13714c`;
    // console.log(props.info);

    useEffect(()=>{
        axios.get(url)
        .then(res => {
          const currData = res.data;
          setWeather(currData);
          setCityData({city:city,lat:currData.coord.lat,lon:currData.coord.lon})
        //   console.log(res);
        });
    },[city,url]);

    

    return (
        <div>
    <div className="bg-image" style={container}>
    <div className="header">
        <h1 className="city-name">{city}</h1>
    </div>
    <div className="weather-info">
        <Details data={weather} />
        {console.log(weather)}
    </div>
    </div>
    <Graph cityData={cityData} />
    </div>
    )
}

export default DynamicInfo;