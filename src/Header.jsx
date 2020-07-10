import React from 'react';
import Form from './Form';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 id='title'>WeatherCheck</h1>
                <Form handleSubmit={this.props.handleSubmit} />
                <p id='error' className={this.props.error ? null : 'hidden'}>
                    Could not find city
                </p>
            </header>
        );
    }
}