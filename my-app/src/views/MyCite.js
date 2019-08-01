import React, { Component } from 'react';
import LoadMoreButton from '../components/LoadMoreButton';
import { getImageSrc } from '../js/util';
import { ScrollTracker, trackLinkClick } from '../js/tracking';


export default class MyCite extends Component {
    constructor(props) {
        super(props);
        this.processRef = React.createRef()
        this.showProcessContent = this.showProcessContent.bind(this);
        this.state = {
            processShown: false,
            hideButtom: false,
        }
    }

    componentDidMount() {
        new ScrollTracker('mycite');
    }

    showProcessContent() {
        this.setState({ processShown: true },
            () => {
                window.scrollTo(0, this.processRef.current.offsetTop - 350)
                this.setState({
                    hideButton: true,
                })
            }
        );
    }

    render () {
        const processClass = this.state.processShown ? '' : 'hidden';

        return (
        <div className='mycite'>
            <div className="inner">
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            I love exploring new cities and seeing the unique local spots, but for most short trips, usual process of finding a route to explore is typically something of the following:
                        </p>
                        <blockquote className="quote">
                            Look up a few sights nearby on Yelp<br/>
                            Skim some Thrillist articles on new local spots<br/>
                            Input each location into Google Maps<br/>
                            Move pins on the map to find efficient route
                        </blockquote>
                    </div>
                    <div className="column">
                        <p>
                            Ample survey responses of people who love exploring new places showed the
                            market for an exploration app. The frustration of the current painfully
                            slow manual process of explore pointed to an opportunity to create a single
                            experience for people discover, navigate, and explore new places.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        )
   }
}
