import React, { Component } from 'react';

export default class Hero extends Component {
    state = {}

    render () {
        return (
            <div className="hero-container">
                <div className={`hero ${this.props.project}`}>
                    <div className="hero-overlay"></div>
                </div>
            </div>
        )
    }
}
