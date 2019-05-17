import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectHeader from '../components/ProjectHeader';
import { ScrollTracker } from '../js/tracking';

export default class ProjectPage extends Component {
    state = {}

    componentDidMount() {
        new ScrollTracker(this.props.project);
    }

    render () {
        return (
            <div>
                <Header />
                <Hero project={this.props.project} />
                <div className="inner">
                    <ProjectHeader project={this.props.project} />
                </div>
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
   }
}
