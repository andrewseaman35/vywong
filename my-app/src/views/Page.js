import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectHeader from '../components/ProjectHeader';
import AmmaHeader from '../components/AmmaHeader';
import TraverseHeader from '../components/TraverseHeader';
import MyCiteHeader from '../components/MyCiteHeader';
import YbvrWhiteLabelHeader from '../components/YbvrWhiteLabelHeader';
import { ScrollTracker } from '../js/tracking';

export default class ProjectPage extends Component {
    state = {}

    componentDidMount() {
        new ScrollTracker(this.props.project);
    }

    renderProjectHeader() {
        if (this.props.project === 'traverse') {
            return <TraverseHeader />;
        } else if (this.props.project === 'amma') {
            return <AmmaHeader />;
        } else if (this.props.project === 'ybvr_white_label') {
            return <YbvrWhiteLabelHeader />;
        } else if (this.props.project === 'mycite') {
            return <MyCiteHeader />;
        }
        return <ProjectHeader project={this.props.project} />;
    }

    render () {
        return (
            <div>
                <Header />
                {this.renderProjectHeader()}
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
   }
}
