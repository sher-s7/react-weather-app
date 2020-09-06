import React from 'react';
import Form from './Form';
import TempUnitToggle from './TempUnitToggle';
import GithubLogo from './assets/github-light.png'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <a id='github' href="https://github.com/sher-s7/react-weather-app" target='_blank' rel="noopener noreferrer"><img src={GithubLogo} alt="github-logo"/></a>
                <h1 id='title'>WeatherCheck</h1>
                <Form hideLoader={this.props.hideLoader} showLoader={this.props.showLoader} cityByCoords={this.props.cityByCoords} handleSubmit={this.props.handleSubmit} />
                <p id='error' className={`${this.props.error ? null : 'hidden'} ${this.props.shake ? 'shake' : ''}`}>
                    Could not find city
                </p>
                <TempUnitToggle clickHandler={this.props.toggleTempUnit}/>
            </header>
        );
    }
}