import React from 'react';
import ResultCard from './ResultCard';

let pluralize = require('pluralize');

export default class LoadedResults extends React.Component {


    pluralize(string) {
        return
    }

    render() {

        // console.log(this.props.unit)
        const cityList = this.props.results.list;
        return (
            <div id="loaded-results">
                <h3 id='num-results'>
                    Found {this.props.results.cnt} {pluralize('city', this.props.results.cnt)} named <span id='city-name'>{cityList[0].name}</span>
                </h3>
                <ul id='city-list'>
                    {cityList.map((city) =>
                        <ResultCard key={city.id.toString()} city={city} unit={this.props.unit}/>
                    )}
                </ul>
            </div>
        );
    }
}