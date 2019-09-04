import React, { Component } from 'react';
import { trackButtonClick } from '../js/tracking';


export default class BackToTopButton extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.scrollDistance = 250;
        this.state = { hidden: true };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    onScroll() {
        const scrollHeight = window.scrollY;
        if (scrollHeight >= this.scrollDistance) {
            this.setState({ hidden: false }, () => {
                document.activeElement.blur();
            });
        } else {
            this.setState({ hidden: true });
        }
    }

    scrollToTop() {
        window.scrollTo(0, 0);
        trackButtonClick('back_to_top_button');
    }

    render () {
        return (
            <div className={`back-to-top ${this.state.hidden ? 'hidden' : ''}`}>
                <div className='back-to-top-container' onClick={this.scrollToTop}>
                    <button className='back-to-top-button svg-arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22"><path fill="#9B9B9B" d="M9 17l4.5-4.5 1.57 1.57L8 21.14.93 14.07 2.5 12.5 7 17V0h2v17z"/></svg>
                    </button>
                </div>
            </div>
        )
   }
}
