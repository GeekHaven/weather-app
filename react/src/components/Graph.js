import React,{useState, useEffect} from "react";
import axios from 'axios';
// import "./Graph.css";
import GetGraph from "./GetGraph";
const Graph = (props)=>{

  var options = {   month:"short",
                    day: "numeric" };
  const [tempData, setTempData] = useState([]);
  const [pressureData, setPressureData] = useState([]);
  const [humidData, setHumidData] = useState([]);

  // Receive temperature, pressure, humidity data for past five days:
  useEffect(()=>{
      const now = new Date();

      var date = Math.round(now.getTime()/1000)-100;

      for(var i=0;i<5;i++){
            axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${props.cityData.lat}&lon=${props.cityData.lon}&dt=${date}&units=metric&appid=a136804c7dd0904689292eda3238abb6`)
            .then(res => {
              const day = res.data.current.dt*1000;  
                setTempData((prev) => ( [
                  ...prev, 
                  {
                    x: day, 
                    y:res.data.current.temp
                  }
                ] ));
                setPressureData((prev) => ( [
                  ...prev, 
                  {
                    x: day, 
                    y:res.data.current.pressure
                  }
                ] ));
                setHumidData((prev) => ( [
                  ...prev, 
                  {
                    x: day, 
                    y:res.data.current.humidity,
                    z:100
                  }
                ] ))
            });
            
            date=date-86400;

            
          }
      
  },[props.cityData]);

  // The data for various days does not come in order : The following lines of code sort them acc to date
tempData.sort((a,b)=>{
    return a.x-b.x;
});
pressureData.sort((a,b)=>{
  return a.x-b.x;
});
humidData.sort((a,b)=>{
  return a.x-b.x;
});

  console.log(pressureData);

  return <div>
    {/* <div className="item" ><GetGraph data={tempData} type="spline" for="Temperature" suffix="°C" ytitle="Temp" /></div>
    <div className="item" ><GetGraph data={pressureData} type="scatter" for="Pressure" suffix="Pa" ytitle="Pressure" /></div>
    <div className="item" ><GetGraph data={humidData} type="column" for="Humidity" suffix="" ytitle="Humidity" /></div> */}
    <GetGraph data={tempData} type="spline" for="Temperature" suffix="°C" ytitle="Temp" />
    <GetGraph data={pressureData} type="scatter" for="Pressure" suffix="Pa" ytitle="Pressure" />
    <GetGraph data={humidData} type="column" for="Humidity" suffix="" ytitle="Humidity" />
  </div>
}

export default Graph;