import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectHeader from '../components/ProjectHeader';
import TraverseHeader from '../components/TraverseHeader';
import { ScrollTracker } from '../js/tracking';

export default class ProjectPage extends Component {
    state = {}

    componentDidMount() {
        new ScrollTracker(this.props.project);
    }

    renderProjectHeader() {
        if (this.props.project === 'traverse') {
            return <TraverseHeader />;
        }
        return <ProjectHeader project={this.props.project} />;
    }

    render () {
        return (
            <div>
                <Header />
                <Hero project={this.props.project} />
                <div className="inner">
                    {this.renderProjectHeader()}
                </div>
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
   }
}
