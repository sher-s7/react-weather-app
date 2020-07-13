import React from 'react';
import Form from './Form';
import TempUnitToggle from './TempUnitToggle';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 id='title'>WeatherCheck</h1>
                <Form handleSubmit={this.props.handleSubmit} />
                <p id='error' className={`${this.props.error ? null : 'hidden'} ${this.props.shake ? 'shake' : ''}`}>
                    Could not find city
                </p>
                <TempUnitToggle clickHandler={this.props.toggleTempUnit}/>
            </header>
        );
    }
}