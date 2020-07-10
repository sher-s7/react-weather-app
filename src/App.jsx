import React from 'react';

import Header from './Header';
import ResultsSection from './ResultsSection';
import Footer from './Footer';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: {},
            error: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e, value) {
        e.preventDefault();

        fetch(
            "https://sher-s7.github.io/weather-app/citylist.json",
            { mode: "cors" }
        )
            .then(cities => cities.json())
            .then(citiesJSON => citiesJSON.filter((city) => city.name.toUpperCase() === value.toUpperCase()).map(city => city.id))
            .then(cityIDs => fetch(
                `http://api.openweathermap.org/data/2.5/group?id=${cityIDs.join(',')}&appid=bec001b5ecc8bf70e103c96354725b62`,
                { mode: "cors" }
            ))
            .then(data => {
                if (data.status === 200) {
                    return data.json()
                }
                throw new Error(data.status)
            })
            .then(dataJSON => this.setState({results: dataJSON, error: false}))
            .catch((error) => {
                console.error(error, 'Could not find city')
                this.setState({error: true});
            })
    }

    render() {
        return (
            <div id='container'>
                <Header error={this.state.error} handleSubmit={this.handleSubmit} />
                <ResultsSection results={this.state.results}/>
                <Footer />
            </div>
        )
    }

}