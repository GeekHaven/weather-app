import React from "react";
import GetLocation from "./GetLoaction";
import Details from "./Details";

const container={
    display:"flex",
    marginTop:"120px",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    color:"red",
}

const Home = (props)=>{
    return <div className="bg-image" style={container}>
        <div className="header">
        <GetLocation changeGlobalCity={props.changeGlobalCity} />
        </div>
        <div className="weather-info">
            <Details data={props.data} />
        </div>
    </div>
}

export default Home;