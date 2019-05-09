import React, { Component } from 'react';
import Header from '../components/Header';
import Tile from '../components/Tile';
import Footer from '../components/Footer';

export default class Home extends Component {
    state = {}

    render () {
        return (
            <div>
                <Header />
                <div className="inner">
                    <div className='homepage'>
                        <h1 className='homepage-header'><strong>Hello there!</strong></h1>
                        <p className="body">I am Victoria. I am a passionate, driven designer who loves:</p>
                        <blockquote className="quote">
                            <strong className="bold-text-2">Designing with impact<br/>Advocating for user needs<br/>Believing my cat loves me back<br/>Saving the best bite of food for last</strong>
                        </blockquote>
                    </div>
                    <div className="tile-container">
                        <Tile project='mycite' title='MyCite' subtitle='Mobile and Web App'>
                        </Tile>
                    </div>
                </div>
                <Footer />
            </div>
        )
   }
}
