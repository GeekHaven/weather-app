import React from "react";
import GetLocation from "./GetLoaction";
import Details from "./Details";

const Home = (props)=>{
    return <div className="bg-image">
        <div className="header">
        <GetLocation changeGlobalCityData={props.changeGlobalCityData} />
        </div>
        <div className="weather-info">
            <Details data={props.data} />
        </div>
    </div>
}

export default Home;