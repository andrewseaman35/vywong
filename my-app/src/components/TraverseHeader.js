import React, { Component } from 'react';
import PAGES from '../js/pages';
import { ScrollTracker } from '../js/tracking';

export default class TraverseHeader extends Component {
    state = {}

    componentDidMount() {
        new ScrollTracker('traverse');
    }

    render () {
        const projectInfo = PAGES['traverse'];
        if (!projectInfo) {
            return null;
        }
        const details = projectInfo.projectDetails;

        return (
            <div className="project-header">
                <div className="project-details">
                    <div className="detail">Product: <strong>{details.product}</strong></div>
                    <div className="detail">‍Year: <strong>{details.year}</strong></div>
                    <div className="detail">‍Experience: <strong>{details.experience}</strong></div>
                    <div className="detail">‍Platform: <strong>{details.platform}</strong></div>
                </div>
                <div className="project-intro">
                    <h2 className="title">One exploration experience to unite them all</h2>
                    <div className="body">
                        I love exploring new cities and seeing the unique local spots, but for most short trips,
                        I find myself scrambling to look up the best spots to explore. My usual process of finding
                        a route to explore is typically something of the following:

                        <blockquote className="quote traverse-header">
                            <strong className="bold-text-2">
                                Look up a few sights nearby on Yelp<br/>
                                Skim some Thrillist articles on new local spots<br/>
                                Input each location into Google Maps<br/>
                                Move pins on the map to find efficient route
                            </strong>
                        </blockquote>

                        Needless to say, my jumping across apps usually eats up precious time I could be using for exploring. I began to think of how I could create a better experience for exploration and imagined Traverse.
                        Traverse is a mobile app that helps individuals explore their surrounding areas. By creating customizable routes, people can discover new sites around them and still make their way to their destinations. Traverse automatically finds, maps, and navigates you to unique places of interest, so you can spend more time exploring.
                    </div>
                </div>
            </div>
        )
    }
}
