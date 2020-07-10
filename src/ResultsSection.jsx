import React from 'react';
import EmptyResults from './EmptyResults'

export default class ResultsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: <EmptyResults/>
        }
    }
    
    render() {
        return (
            <section className='results'>
                {this.state.results}
            </section>
        );
    }
}