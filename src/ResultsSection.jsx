import React from 'react';
import TempUnitToggle from './TempUnitToggle'

export default class ResultsSection extends React.Component {
    render() {
        return (
            <section className='results'>
                <TempUnitToggle clickHandler={this.props.toggleTempUnit}/>
                {this.props.content}
            </section>
        );
    }
}