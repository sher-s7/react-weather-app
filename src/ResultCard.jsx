import React from 'react';

export default class ResultCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            unit: this.props.unit === 'metric' ? 'C' : 'F',
        }
    }

    kelvinToUnit(unit, temp) {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;
        return Math.round((unit === 'C' ? celsius : fahrenheit + Number.EPSILON) * 100) / 100;
         
    }

    unixTimeConverter(unixTime) {
        const dateObj = new Date(unixTime * 1000);
        const utcString = dateObj.toUTCString();
        const time = utcString.slice(-11, -4);
        return time;
    }

    render() {
        console.log(this.props.unit)
        const city = this.props.city;
        return (
            <li>
                <div className='cityContainer'>
                    <div className='cityMainInfo'>
                        <span className={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></span>{city.name}
                        <span className='main-temp'>{this.kelvinToUnit(this.props.unit, city.main.temp) + `°${this.props.unit}`}</span>
                        <span className='feelslike-temp'>Feels like {this.kelvinToUnit(this.props.unit, city.main.feels_like)
                            + `°${this.props.unit}`}</span>
                    </div>
                </div>
            </li>
        );
    }
}
