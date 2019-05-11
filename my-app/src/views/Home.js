import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
                        <div className="tile-row">
                            <Tile project='mycite' size='small' title='MyCite' subtitle='Mobile and Web App' />
                            <Tile project='ybvr_white_label' size='wide' title='YBVR White Label' subtitle='Virtual Reality' />
                        </div>
                        <div className="tile-row">
                            <Tile project='ybvr_brand' size='small' title='YBVR Brand' subtitle='Brand Development' />
                            <Tile project='traverse' size='small' title='Traverse' subtitle='Mobile iOS' />
                            <Tile project='amma' size='small' title='AMMA' subtitle='Mobile Android' />
                        </div>
                        <div className="tile-row">
                            <Tile project='other' size='full-width' title='Other Work' subtitle='Print, branding, infographic, fun' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
   }
}
