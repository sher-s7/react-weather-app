import React from 'react';

export default class ResultsSection extends React.Component {
    render() {
        return (
            <section className='results'>
                {this.props.content}
            </section>
        );
    }
}