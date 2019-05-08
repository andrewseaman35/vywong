import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Page extends Component {
    state = {}

    render () {
        return (
            <div>
                <Header />
                <h1>Page</h1>
                <Footer />
            </div>
        )
   }
}
