import React, { Component } from 'react'
import Axios from 'axios'

class GetLoaction extends Component {
    constructor(props){
        super(props)
        this.state = {
          Latitude: 0,
          Longitude: 0,
          city: ''
        }
      }
    
      getCoordinates() {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      }
    
      setCity = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.Latitude}&lon=${this.state.Longitude}&appid=77f89854c57f52abf424c8eb9b13714c`)
        .then( res => {
          this.setState({
            ...this.state,
            city: res.data.name
          })
        })
      }
    
      async componentDidMount() {
        const position = await this.getCoordinates(); 
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // console.log(latitude, longitude)
        this.setState(prevState => {
          return {...prevState, Latitude:latitude,Longitude:longitude}
        });
        this.setCity()
      }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                {this.state.city}
                </header>
            </div>
        )
    }
}

export default GetLoaction
