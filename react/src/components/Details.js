import React,{useState, useEffect} from "react";

const Details = (props) => {
    const weathData = props.data;
    const [details,setDetails] = useState({
        temp:'',
        maxTemp:'',
        minTemp:'',
        humid:'',
        weather:'',
        icon:''
    })
    useEffect(()=>{
        try{
                setDetails({
                temp: weathData.main.temp,
                minTemp: weathData.main.temp_min,
                maxTemp: weathData.main.temp_max,
                humid: weathData.main.humidity,
                weather: weathData.weather[0].description,
                icon: weathData.weather[0].icon
                });
            }
            catch{
                setDetails((prev)=>prev)
            }
    },[weathData]);
    const iconurl = "http://openweathermap.org/img/wn/"+details.icon+"@2x.png";
    return <div>
        <img style={{marginLeft:"-1.5rem"}} src={iconurl} alt="weather-icon"/>
        <h1 className="temp">{details.temp}°</h1>
        <h2 className="max-min-temp">{details.weather} &nbsp; | &nbsp; {details.maxTemp} / {details.minTemp} °C</h2>
        <h2>Humidity &nbsp;: &nbsp;{details.humid}</h2>
    </div>
}

export default Details;