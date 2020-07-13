import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <span id="powered-by">
                    Powered by <a rel='noopener noreferrer' target="_blank" href="https://openweathermap.org/api">OpenWeatherMap API</a>
                </span>
            </footer>
        );
    }
}
