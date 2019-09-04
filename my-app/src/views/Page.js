import React, { Component } from 'react';

import BackToTopButton from '../components/BackToTopButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectHeader from '../components/ProjectHeader';
import AmmaHeader from '../components/AmmaHeader';
import TraverseHeader from '../components/TraverseHeader';
import MyCiteHeader from '../components/MyCiteHeader';
import YbvrWhiteLabelHeader from '../components/YbvrWhiteLabelHeader';
import { ScrollTracker } from '../js/tracking';

export default class ProjectPage extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.scrollDistance = 250;
    }

    componentDidMount() {
        new ScrollTracker(this.props.project);
        window.addEventListener("scroll", this.onScroll);
    }

    onScroll() {
        const scrollHeight = window.scrollY;
        if (scrollHeight >= this.scrollDistance) {
            this.setState({
                hideBackToTop: false,
            }, () => {
                document.activeElement.blur();
            })
        } else {
            this.setState({
                hideBackToTop: true,
            })
        }
    }

    scrollToTop() {
        window.scrollTo(0, 0);
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
                    <BackToTopButton />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
   }
}
