import React from 'react';
let pluralize = require('pluralize');

export default class LoadedResults extends React.Component {

    pluralize(string) {
        return
    }

    render() {

        console.log(this.props.results)

        return (
            <div id="loaded-results">
                <h3 id='num-results'>Found {this.props.results.cnt} {pluralize('city',this.props.results.cnt)} named {this.props.results.list[0].name}</h3>
                <ul id='city-list'>
                    {this.props.results.list.map((city) =>
                        <li><span class={`flag-icon flag-icon-${city.sys.country.toLowerCase()}`}></span>{city.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}