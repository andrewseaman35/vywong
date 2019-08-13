import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import { ScrollTracker, trackLinkClick } from '../js/tracking';


export default class Amma extends Component {
    componentDidMount() {
        new ScrollTracker('amma');
    }

    render () {
        return (
        <div className='traverse'>
            <div className="inner">
                <section className="block-statement">
                    “In 2017, 3,564 people died from asthma. <strong>Many of these deaths are
                    avoidable with proper treatment and care</strong>.” –CDC
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            As an individual without asthma, I wanted to gather information
                            from first hand experiences of individuals living with asthma.
                            I conducted interviews and heard their recollections of
                            having asthma attacks as well as how they have learned to cope
                            with living with asthma. Based on the interviews, I found that
                            although the individuals were diagnosed and treated for asthma,
                            they did not always know what would trigger their asthma attacks.
                            This lack of certainty often led people to feel weary and held
                            back by their asthma.
                        </p>
                    </div>
                    <div className="column second">
                        <img src={getImageSrc('amma/Skye.png')} alt="Persona Skye"/>
                    </div>
                </section>
                <section className="block-statement">
                    If having asthma is part of Skye’s lifestyle, <strong>how can I offer a product
                    that can change and improve how she lives?</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            I envisioned an app that could deliver real-time information
                            about asthmatic triggers and offer insights based on historically
                            accumulated personal data. I found the following features to be
                            crucial in informing the user of current conditions and accumulating
                            data for long-term analysis:
                        </p>
                        <blockquote className="quote">
                            Recent activity and risk meter<br/>
                            Adding an asthmatic episode<br/>
                            Cumulative logs of historical data
                        </blockquote>
                    </div>
                    <div className="column two-images">
                        <img className="column-image first" src={getImageSrc('amma/dashboard.png')} alt="Dashboard Wireframe"/>
                        <img className="column-image" src={getImageSrc('amma/history_logs.png')} alt="History Log Wireframe"/>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('amma/dashboard_history_logs.png')} alt="Style Guide"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            Although users navigated smoothly through the prototype, I found that
                            the asthma logging and history logs pages had too much information,
                            which sometimes overwhelmed the user and discouraged them from filling
                            out more information.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            This feedback suggested that the asthma logging process and
                            visualization of the history logs were too convoluted and needed to
                            be streamlined. For future iterations of the project, I would revisit
                            ways to make user entry easier and the data visualization more
                            approachable.
                        </p>
                    </div>
                </section>
                <section className="block-statement">
                    <strong>Knowing what I learned from working on an FDA-approved product</strong>, what would I do differently?
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            After working on the <a href='/#/mycite' onClick={function() { trackLinkClick('amma-mycite') }}>MYCITE project</a> and understanding the
                            ]thoroughness of human factor studies in relation to medical devices, I wanted
                            to reflect on AMMA as a viable medicine companion app.
                        </p>
                        <p>
                            Although the risk percentage could give insights, I would be concerned that the
                            chance of unnecessary alarm or fear could cause a counterproductive reaction and
                            trigger stress-related asthmatic symptoms. In addition, being informed that the
                            user is at high risk for an asthma attack based on a predictable could cause them
                            to preemptively take medication or seek medical attention before it is necessary.
                            Without extensive scientific research and testing, I do not believe the risk meter
                            would be a viable feature for the AMMA product.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            I think the AMMA product could pivot its focus to the value of its historically
                            accumulated personal data. The accumulation of data could give the user a better
                            understanding of potential triggers through the app’s active and passive data
                            collection. The app would collect input from the user’s perceptions on their
                            asthma and information on environmental data. There would still need to be a
                            clear statement to that the information is predictive and not diagnostic.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        )
    }
}
