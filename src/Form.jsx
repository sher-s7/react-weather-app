import React from 'react';
import Location from './assets/location.png'

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.value)}>
                <div id="input-container">
                    <div id="location-container">
                        <img
                            src={Location}
                            alt="location-icon"
                            id="location-icon"
                        />
                    </div>
                    <input placeholder={'Enter a city name'} required id="location-input" type="text" name="location" onChange={this.handleChange} />
                    <button value="" type="submit" id="search-icon-container">
                        <i className="las la-search" alt="search-icon" id="search-icon"> </i>
                    </button>
                </div>
            </form>
        )
    }
}