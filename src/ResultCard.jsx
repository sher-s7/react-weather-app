import React from 'react';

export default class ResultCard extends React.Component {

    unixTimeConverter(unixTime) {
        const dateObj = new Date(unixTime * 1000);
        const utcString = dateObj.toUTCString();
        const time = utcString.slice(-11, -4);
        return time;
    }

    render() {
        const city = this.props.city;
        return (
            <li>
                <div className='cityContainer'>
                    <div className='cityMainInfo'>
                        <span className={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></span>{city.name}
                        <span className='main-temp'>{city.main.temp +'°C'}</span>
                        <span className='feelslike-temp'>Feels like {city.main.feels_like+'°C'}</span>
                    </div>
                </div>
            </li>
        );
    }
}
