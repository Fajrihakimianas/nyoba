import React, { Component } from 'react';
import Hero from 'Component/Hero';

export default class Landingpage extends Component {
    render() {
        const { results } = this.props.results;
        return (
            <>
                <Hero results={results}/>
            </>
        )
    }
}
