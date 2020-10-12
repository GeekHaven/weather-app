import React,{Component} from 'react'
import './Footer.css'
import gitimg from '../github-img.png'

const repolink = 'https://github.com/GeekHaven/weather-app'
const apilink= 'https://openweathermap.org/api'
class Footer extends Component{
    
    render(){
        return(
        <footer className='main-footer'>
            <div className='img'>
            <a href={repolink}><img src={gitimg} alt="image" /></a>
            </div>
            <hr/>
            {/* <h1>Footer</h1> */}
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>API</h4>
                        <ul className='list-unstyled'>
                            <li><a  href={apilink} className='link'>CLICK HERE</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>GO-TO</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/search'>SEARCH</a></li>
                            <li><a href='/suscribe'>SUSCRIBE</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Maintained By</h4>
                        <ul className='list-unstyled'>
                            <li><a href='https://github.com/garvitchittora'>Garvit</a></li>
                            <li><a href='https://github.com/infern018'>Vishwas</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} GEEKHAVEN IIIT ALLAHABAD | All Rigths Reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;