import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectHeader from '../components/ProjectHeader';

export default class ProjectPage extends Component {
    state = {}

    render () {
        return (
            <div>
                <Header />
                <Hero project={this.props.project} />
                <div className="inner">
                    <ProjectHeader project={this.props.project} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
   }
}
