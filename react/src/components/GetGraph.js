import React from "react";
import CanvasJSReact from '../canvasjs/canvasjs.react';
import "./GetGraph.css";


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const GetGraph = (props)=>{
    console.log(props);
    CanvasJS.addColorSet("weather",['#00adb5','#ff2e63','#ffc93c','#fc5185','#d72323']);
    const options = {
        colorSet: 'weather',
        backgroundColor: "transparent",
        animationEnabled: true,
        title:{
            fontColor: "#eeeeee",
            fontFamily:"Montserrat",
            text: props.for
        },
        axisX: {
            titleFontColor: "#eeeeee",
            fontFamily:"Montserrat",
            labelFontColor: '#eeeeee',
            valueFormatString: 'DD MMM',
            interval:1,
            intervalType:'day'
        },
        axisY: {
            interlacedColor: "rgba(255,250,250,0.1)",
            fontFamily:"Montserrat",
            gridColor: "#eeeeee",
            titleFontColor: "#eeeeee",
            labelFontColor: '#eeeeee',
            title: props.ytitle,
            suffix: props.suffix
        },
        data: [{
            type: props.type,
            markerSize: 15,
            xValueFormatString: 'hh:mm TT | DD MMM',
            xValueType: "dateTime",
            yValueFormatString: '##.#'+props.suffix,
            dataPoints: props.data
        }]
    }
    return <div style={{display:"block"}}><CanvasJSChart class="font" options = {options} /></div>
}

export default GetGraph;