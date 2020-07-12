import React from 'react';
import ResultCard from './ResultCard';

let pluralize = require('pluralize');

export default class LoadedResults extends React.Component {

    pluralize(string) {
        return
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
                        <ResultCard key={city.id.toString()} city={city}/>
                    )}
                </ul>
            </div>
        );
    }
}