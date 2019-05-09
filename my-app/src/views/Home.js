import React, { Component } from 'react';
import Header from '../components/Header';
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
                        <p class="body">I am Victoria. I am a passionate, driven designer who loves:</p>
                        <blockquote class="quote">
                            <strong class="bold-text-2">Designing with impact<br/>Advocating for user needs<br/>Believing my cat loves me back<br/>Saving the best bite of food for last</strong>
                        </blockquote>
                    </div>
                </div>
                <Footer />
            </div>
        )
   }
}
