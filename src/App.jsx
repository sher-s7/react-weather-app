import React from 'react';

import Header from './Header';
import ResultsSection from './ResultsSection';
import Footer from './Footer';
import EmptyResults from './EmptyResults';
import LoadedResults from './LoadedResults';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: {},
            error: false,
            shake: false,
            fadeOut: false,
            tempUnit: 'C',
            emptyResults: false,
            lastSearch: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleTempUnit = () => {
        if(this.state.tempUnit === 'C') {
            this.setState({tempUnit: 'F'})
        }else {
            this.setState({tempUnit: 'C'})
        }
    }

    async handleSubmit(e, value) {
        e.preventDefault();
        if (this.state.lastSearch.toUpperCase() === value.toUpperCase()) return;
        this.setState({ shake: false });
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
                    this.setState({emptyResults: true, lastSearch: value})
                    return data.json()
                }
                throw new Error(data.status)
            })
            .then(dataJSON => {
                this.setState({ fadeOut: true })
                setTimeout(() => {
                    this.setState({ results: dataJSON, error: false, content: <LoadedResults/>, emptyResults: false })
                }, 500);
            })
            .catch((error) => {
                console.error(error, 'Could not find city')
                this.setState({ error: true, shake: true });
            })
    }


    render() {
        return (
            <div id='container'>
                <Header toggleTempUnit={this.toggleTempUnit}
                        shake={this.state.shake} 
                        error={this.state.error} 
                        handleSubmit={this.handleSubmit} />
                <ResultsSection
                    results={this.state.results}
                    content={Object.keys(this.state.results).length === 0 ?
                        <EmptyResults fadeOut={this.state.fadeOut} /> :
                        <LoadedResults emptyResults={this.state.emptyResults} unit={this.state.tempUnit} results={this.state.results} />} />
                <Footer />
            </div>
        )
    }

}