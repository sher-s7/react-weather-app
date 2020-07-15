import React from 'react';
import { format } from 'date-fns'

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
        const d = new Date((unixTime+offset)*1000);
        const UTCDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds() )
        console.log(UTCDate)
        return format(UTCDate, 'h:mma');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false})
        }, this.props.waitTime);
    }

    render() {

        const city = this.props.city;
        console.log(city)
        return (
            <li>
                <div className={`cityContainer ${this.state.hidden ? 'hidden' : ''} ${this.props.emptyOut ? 'fadeOut' : ''}`}>
                    
                        <div className={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></div>
                        <div className='cityName'>{city.name}</div>
                        <div className='mainTemp'>{this.kelvinToUnit(this.props.unit, city.main.temp) + `°${this.props.unit}`}</div>
                        <div className='condition'>{city.weather[0].description[0].toUpperCase() + city.weather[0].description.substring(1)}</div>
                        <div className='windSpeed'>Wind {Math.round((city.wind.speed * 3.6 + Number.EPSILON) * 100) / 100}<span className='unit'>km/h</span></div>
                        <div className='visibility'>Visibility {city.visibility / 1000}<span className='unit'>km</span></div>
                        <div className='humidity'>Humidity {city.main.humidity}%</div>
                        <div className='sunrise'>Sunrise {this.unixTimeConverter(city.sys.sunrise, city.sys.timezone)}</div>
                        <div className='sunset'>Sunset {this.unixTimeConverter(city.sys.sunset, city.sys.timezone)}</div>
                    
                </div>
            </li>
        );
    }
}
