import React, { Component } from "react";
import "./Search.css";

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      result:'',
      imgurl:'',
      details:'',
      temp:'',
      humidity:''
    };
  }

  onChange = (event) =>{
    this.setState({city : event.target.value});
    this.fetchData();
    document.getElementById('details').style.display= 'none' ;
  }

  componentDidMount(){
  this.fetchData();
  }

  fetchData = () => {
    const urlString="http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=77f89854c57f52abf424c8eb9b13714c"
    fetch(urlString)
    .then(res => res.json() ) 
    .then(json => {
          this.setState ({
             result: json.weather[0],
             details:json,
             temp:Math.round(json.main.temp-273.15),
             humidity:json.main.humidity
          })
       })
    .catch((error) => {
    console.log(error, "catch the hoop")
  })
    const imageurl="http://openweathermap.org/img/wn/"+this.state.result.icon+"@2x.png"
    this.setState({imgurl:imageurl})
  }

  handleSubmit = (event) => {
    this.fetchData();
    console.log(this.state.city);
    console.log(this.state.result);
    event.preventDefault();
    document.getElementById('details').style.display= 'block' ;

  }
  render(){
    return (
    <div class="container">
    <div class="search-box">
      <h2>Search by City Name</h2>
      <form>
        <div class="user-box">
          <input type="text" value={this.state.city} onChange={this.onChange}/>
          <label>City</label>
        </div>
        <a onClick = {this.handleSubmit} href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            Search
        </a>
      </form>
    </div>
    <div class="display">
      <div id="details">
        <h1>{this.state.details.name}</h1>
        <img src={this.state.imgurl} alt="sun"></img>
        <ul>
        <li>{this.state.temp} °C</li>
        <li>{this.state.result.description}</li>
        <li>humidity: {this.state.humidity}</li>
        </ul>
      </div>
    </div>
    </div>
  );

  }
}
  


export default Search;
