import React from 'react';
import { format } from 'date-fns'

import sun from './assets/icons/01.png'
import cloud from './assets/icons/02.png'
import scatteredcloud from './assets/icons/03.png'
import brokenclouds from './assets/icons/04.png'
import rain from './assets/icons/09.png'
import heavyrain from './assets/icons/10.png'
import thunderstorm from './assets/icons/11.png'
import snow from './assets/icons/13.png'
import mist from './assets/icons/50.png'

const weatherIcons = {
    '01': sun,
    '02': cloud,
    '03': scatteredcloud,
    '04': brokenclouds,
    '09': rain,
    '10': heavyrain,
    '11': thunderstorm,
    '13': snow,
    '50': mist,
};


export default class ResultCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            unit: this.props.unit === 'metric' ? 'C' : 'F',
            hidden: true,
        }
    }

    kelvinToUnit(unit, temp) {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;
        return Math.round((unit === 'C' ? celsius : fahrenheit + Number.EPSILON) * 100) / 100;

    }

    unixTimeConverter(unixTime, offset) {
        const d = new Date((unixTime + offset) * 1000);
        const UTCDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds())

        return format(UTCDate, `h:mma`);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hidden: false })
        }, this.props.waitTime);
    }

    render() {
        const city = this.props.city;
        const timezone = city.sys.timezone || city.timezone;
        const sunrise = this.unixTimeConverter(city.sys.sunrise, timezone);
        const sunset = this.unixTimeConverter(city.sys.sunset, timezone);
        return (
            <li>
                <div className={`cityContainer ${this.state.hidden ? 'hidden' : ''} ${this.props.emptyOut ? 'fadeOut' : ''}`}>

                    <div className={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></div>
                    <div className='mainTemp'><span className='unit'>{this.kelvinToUnit(this.props.unit, city.main.temp)}<sup>{`°${this.props.unit}`}</sup></span></div>
                    <div className='condition'>{city.weather[0].description[0].toUpperCase() + city.weather[0].description.substring(1)}</div>
                    <div className='weather-icon'><img src={weatherIcons[city.weather[0].icon.substring(0, 2)]} alt="" /></div>

                    <div className='windSpeed'>Wind <span className='unit'>{Math.round((city.wind.speed * 3.6 + Number.EPSILON) * 100) / 100}<sup>km/h</sup></span></div>
                    <div className='visibility'>Visibility <span className='unit'>{city.visibility / 1000}<sup>km</sup></span></div>
                    <div className='clouds'>Cloudiness <span className='unit'>{city.clouds.all}<sup>%</sup></span></div>
                    <div className='humidity'>Humidity <span className='unit'>{city.main.humidity}<sup>%</sup></span></div>
                    <div className='sunrise'>Sunrise <span className='unit'>{sunrise.substring(0, sunrise.indexOf('M') - 1)}<sup className='am-pm'>{sunrise.substring(sunrise.indexOf('M') - 1)}</sup></span></div>
                    <div className='sunset'>Sunset <span className='unit'>{sunset.substring(0, sunset.indexOf('M') - 1)}<sup className='am-pm'>{sunset.substring(sunset.indexOf('M') - 1)}</sup></span></div>

                </div>
                <div className={`coords ${this.state.hidden ? 'hidden' : ''} ${this.props.emptyOut ? 'fadeOut' : ''}`}><a target='_blank' href={`https://www.google.com/maps/place/${city.coord.lat}%2C${city.coord.lon}`} rel="noopener noreferrer">View on map</a></div>

            </li>
        );
    }
}
