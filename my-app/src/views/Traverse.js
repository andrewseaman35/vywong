import React, { Component } from 'react';
import LoadMoreButton from '../components/LoadMoreButton';
import { getImageSrc } from '../js/util';
import { ScrollTracker } from '../js/tracking';


export default class Traverse extends Component {
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
        new ScrollTracker('traverse');
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
        <div className='traverse'>
            <div className="inner">
                <section className="block-statement">
                    <strong>Exploration should be about experiencing new places</strong>,
                    not spending unnecessary time looking for each individual site.
                </section>
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
                            slow manual process of exploring pointed to an opportunity to create a single
                            experience for people to discover, navigate, and explore new places.
                        </p>
                    </div>
                </section>
                <section className='no-margin'>
                    <div className="column first">
                        <img src={getImageSrc('traverse/before_flow.png')} alt="Current process"/>
                    </div>
                    <div className="column">
                        <img src={getImageSrc('traverse/after_flow.png')} alt="Reimagined process"/>
                    </div>
                </section>
                <section className="block-statement">
                    By removing the time-consuming app-hopping and route tweaking, <strong>you get back your time to explore and discover.</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            Through my interviews, I found that there were two types of travelers:
                            Travis, the travel-when-I-can, and Emily, the travel-to-see-it-all.
                            With the assumption that users who extensively planned trips would be
                            desktop users, I wanted to focus my initial prototype on Travis, the
                            on-the-go weekend tripper in order to target mobile users with high
                            app usage.
                        </p>
                        <p>
                            For the core experience, I tailored to the impromptu traveling habits
                            of Travis and designed a flow that would allow for an expedited process
                            of finding a route with sites nearby. Throughout the wireframing and
                            mockup process, I gathered user feedback to refine the exploration
                            experience from account creation to route navigation.
                        </p>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <img src={getImageSrc('traverse/must_sees.png')} alt="Onboarding must sees"/>
                        </div>
                    </div>
                </section>
                <section className="block-statement">
                    <strong>Expedited can still involve planning ahead</strong>, just not too far in advance.
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            Feedback gathered from my rounds of user testing included:
                        </p>
                        <blockquote className="quote">
                            Onboarding steps were too long and users felt personal details and friend invitations were unnecessary <br/>
                            Users wanted the option to save a trip for the future <br/>
                            Users asked for the ability to customize generated routes <br/>
                            Users preferred to see reviews and information from apps they normally used<br/>
                        </blockquote>
                    </div>
                    <div className="column">
                        <p>
                            With the information gathered from usability tests, I would want to
                            build a second iteration of offered users the ability to save created
                            routes or plan a trip in advance. Contary to my initial assumption
                            that people on the go do not have any time to plan, if given a method
                            to expedite the route creation process, users would find time to plan
                            a little in advance.
                        </p>
                        <p>
                            In addition, although Traverse does offer a single experience to create
                            and navigate to discover new places, users feel comfortable referencing
                            apps they use often. Because of this, I would explore app integrations
                            to offer users both a fluid experience and familiarity of what they
                            currently use.
                        </p>

                    </div>
                </section>
                <LoadMoreButton
                    hide={this.state.hideButton}
                    onClick={this.showProcessContent}
                />
            </div>
            <div id='process-content' ref={this.processRef} className={`project-content inner ${processClass}`}>
                <section className="block-statement">
                    Starting at the beginning, I asked myself, <strong>what would help people explore more often?</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            While analyzing the apps I frequented, I began to notice that the apps
                            did bits and pieces of the exploration process, but none captured the
                            full process of discovering, mapping, and navigating a user through an
                            entire exploration. The opportunity I saw was the ability to combine
                            all of those sections into one fluid experience.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            I wanted to gain a better understanding of the potential opportunity
                            as well as target users for the app. I conducted interviews with
                            people who said they liked to explore to get a clearer understanding of
                            how people explored local spots when traveling. I focused my
                            questions around how they found and planned their trips as well as
                            what their likes and frustrations about their planning and exploring
                            process. Based on the information gathered, I built personas that
                            encompassed two types of explorers: Emily and Travis.
                        </p>
                    </div>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <img className='user-story' src={getImageSrc('traverse/Emily.png')} alt="Persona Emily"/>
                    </div>
                    <div className="column">
                        <img className='user-story' src={getImageSrc('traverse/Travis.png')} alt="Persona Travis"/>
                    </div>
                </section>
                <section className="block-statement">
                    If I was Travis, I would want to <strong>hit a few buttons and be on my way to new places.</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            Within the three week timeframe, I chose to focus on Travis’ user flow
                            as my initial persona. With the assumption that users like Travis who
                            take impromptu weekend trips would have more opportunities to
                            utilize the core feature of the app: expedited route discovery and
                            navigation.
                        </p>
                    </div>
                    <div className="column">
                        <img className='user-story' src={getImageSrc('traverse/traverse_flow.png')} alt="Full flow"/>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('traverse/wireframes.png')} alt="Traverse Wireframes"/>
                </section>
                <section className="block-statement">
                    Traverse’s brand captures the <strong>feeling of excitement and delight when discovering something new</strong>.
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            With the layout from the wireframes, I began to build Traverse's brand.
                            I built a style guide that encompassed Traverse's modern aesthetic with a
                            dark theme, accented with bright colors, and a clean, refined typeface.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            Based on the style guide, I created high fidelity mockups for the screens
                            and built an InVision prototype to capture the user journeys through the
                            app and walk the user through key flows.
                        </p>
                    </div>
                </section>
                <section className="dual-text">
                    <div className="column first two-images">
                        <img className="column-image first" src={getImageSrc('traverse/whereto2.png')} alt="Home"/>
                        <img className="column-image" src={getImageSrc('traverse/create_route.png')} alt="Create Route"/>
                    </div>
                    <div className="column two-images">
                        <img className="column-image first" src={getImageSrc('traverse/navigation_preview.png')} alt="Route Preview"/>
                        <img className="column-image" src={getImageSrc('traverse/navigation_in_progress.png')} alt="Navigation"/>
                    </div>
                </section>
            </div>
        </div>
        )
   }
}
