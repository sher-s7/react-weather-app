import React from 'react';
let pluralize = require('pluralize');

export default class LoadedResults extends React.Component {

    pluralize(string) {
        return
    }

    unixTimeConverter(unixTime) {
        const dateObj = new Date(unixTime * 1000);
        const utcString = dateObj.toUTCString();
        const time = utcString.slice(-11, -4);
        return time;
    }

    kelvinToCelsius(temp) {
        return Math.round(((temp - 273.15) + Number.EPSILON) * 100) / 100
    }

    render() {

        console.log(this.props.results)
        const cityList = this.props.results.list;
        return (
            <div id="loaded-results">
                <h3 id='num-results'>
                    Found {this.props.results.cnt} {pluralize('city', this.props.results.cnt)} named {cityList[0].name}
                </h3>
                <ul id='city-list'>
                    {cityList.map((city) =>
                        <li>
                            <div className='cityContainer'>
                                <div className='cityMainInfo'>
                                    <span className={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></span>{city.name}
                                    <span className='main-temp'>{this.kelvinToCelsius(city.main.temp)}</span>
                                    <span className='feelslike-temp'>Feels like {this.kelvinToCelsius(city.main.feels_like)}</span>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}