import React from 'react';
import Location from './assets/location.png'

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            geoError: 'hidden',
            geoFailMessage: 'Geolocation is not supported by your browser',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    success = (position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.props.cityByCoords(latitude, longitude);
        }

        error = () => {
            this.props.hideLoader();
            this.setState({geoFailMessage: 'Unable to retrieve your location', geoError: ''});
            setTimeout(() => {
                this.setState({geoError: 'hidden'})
            }, 3000);
        }

    getLocation = () => {
        if(!navigator.geolocation) {
            this.setState({geoFailMessage: 'Geolocation is not supported by your browser', geoError: ''})
            setTimeout(() => {
                this.setState({geoError: 'hidden'})
            }, 3000);
            this.props.hideLoader();
        } else {
            navigator.geolocation.getCurrentPosition(this.success, this.error)
            this.props.showLoader();
        }
  
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.value.trim())}>
                <div id="input-container">
                    <button type='button' onClick={this.getLocation} id="location-container">
                        <img
                            src={Location}
                            alt="location-icon"
                            id="location-icon"
                        />
                    </button>
                    <input placeholder={'Enter a city name'} required id="location-input" type="text" name="location" onChange={this.handleChange} />
                    <button value="" type="submit" id="search-icon-container">
                        <i className="las la-search" alt="search-icon" id="search-icon"> </i>
                    </button>
                </div>
                <p id='geoFail' className={this.state.geoError}>
                    {this.state.geoFailMessage}
                </p>
            </form>
        )
    }
}