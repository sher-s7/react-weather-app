import React from 'react';
import LoadingSun from './LoadingSun'

export default class EmptyResults extends React.Component {
    render() {
        return (
            <div id='empty' className={this.props.class}>
                <LoadingSun />
                <div id="help-text">
                    <span>Search for a location
            to check the weather</span>
                </div>
            </div>
        );
    }
}