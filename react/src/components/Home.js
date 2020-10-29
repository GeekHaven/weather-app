import React from "react";
import GetLocation from "./GetLoaction";
import Details from "./Details";
import Notifications from "./Notifications";

const container={
    display:"flex",
    marginTop:"120px",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    color:"red",
}

const Home = (props)=>{
    return(
        <div className="bg-image" style={container}>
        <Notifications />
        <div className="header">
        <GetLocation changeGlobalCityData={props.changeGlobalCityData} />
        </div>
        <div className="weather-info">
            <Details data={props.data} />
        </div>
    </div>
    )}

export default Home;