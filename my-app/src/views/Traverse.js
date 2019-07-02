import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import { trackLinkClick } from '../js/tracking';
import initLightbox from '../components/Lightbox';


export default class Traverse extends Component {
    state = {}

    componentDidMount() {
        initLightbox('traverse', 'lightbox')
    }

    render () {
        return (
        <div className='traverse'>
            <div id='lightbox'></div>
            <div className="content">
                <div className="screens-container full-width">
                    <div>
                        <img data-lightbox-group='screens' data-lightbox-class='no-background' src={getImageSrc('traverse/login.png')} alt="Login Screen"/>
                    </div>
                    <div>
                        <img data-lightbox-group='screens' data-lightbox-class='no-background' src={getImageSrc('traverse/whereto.png')} alt="Where To Screen"/>
                    </div>
                    <div>
                        <img data-lightbox-group='screens' data-lightbox-class='no-background' src={getImageSrc('traverse/routing.png')} alt="Routing Screen"/>
                    </div>
                </div>
                <section>
                    <div className="section-header">
                        <h2>Building on an Idea</h2>
                        <h6>Competitor analysis, user surveys, interviews, personas, customer journey mapping</h6>
                    </div>
                    <p>
                        While analyzing the apps I frequented, I began to notice that the apps did bits and pieces of
                        the exploration process, but none captured the full process of discovering, mapping, and
                        navigating a user through an entire exploration. The opportunity I saw was the ability to
                        combine all of those sections into one fluid experience.
                    </p>
                    <p>
                        I wanted to gain a better understanding of the potential opportunity as well as target users
                        for the app. I conducted interviews with people who said they liked to explore to get clearer
                        understanding of how people explored local spots and when traveling. I focused my questions
                        around how they found and planned their trips as well as what they liked and felt frustration
                        about their planning and the execution of their exploration. Based on the information
                        gathered, I built personas that encompassed three types of explorers:
                        <strong><i> Travis, Andrew, and Ciara.</i></strong>
                    </p>
                    <div className="screens-container full-width">
                        <div className="persona">
                            <img data-lightbox-group='personas' src={getImageSrc('traverse/persona_travis.png')} alt="Persona Travis"/>
                            <img data-lightbox-group='personas' className='user-story' src={getImageSrc('traverse/userstory_travis.png')} alt="User Story Travis"/>
                        </div>
                        <div className="persona">
                            <img data-lightbox-group='personas' src={getImageSrc('traverse/persona_andrew.png')} alt="Persona Andrew"/>
                            <img data-lightbox-group='personas' className='user-story'src={getImageSrc('traverse/userstory_andrew.png')} alt="User Story Andrew"/>
                        </div>
                        <div className="persona">
                            <img data-lightbox-group='personas' src={getImageSrc('traverse/persona_ciara.png')} alt="Persona Ciana"/>
                            <img data-lightbox-group='personas' className='user-story'src={getImageSrc('traverse/userstory_ciara.png')} alt="User Story Ciana"/>
                        </div>
                    </div>
                    <p>
                        After mapping out each of the persona’s journey and clustering their key actions to find
                        common goals, I solidified the product’s core features:
                    </p>
                    <blockquote className="quote">
                        <strong className="bold-text-2">
                            Mapping a route<br/>
                            Explore nearby sites<br/>
                            Adding and sharing new experiences
                        </strong>
                    </blockquote>
                </section>
                <section>
                    <div className="section-header">
                        <h2>Structuring</h2>
                        <h6>User flows, information architecture, wireframes</h6>
                    </div>
                    <p>
                        I focused the initial site map on the ability to explore and navigate to new routes.
                    </p>
                    <div className="full-width">
                        <img data-lightbox-group='sitemap' src={getImageSrc('traverse/sitemap.png')} alt="Site map"/>
                    </div>
                    <p>
                        I built the core elements to allow users quick access to both finding routes and browsing nearby
                        sites. In addition, I included multiple entry points for reviewing and sharing experiences
                        so that the process of finding, navigating, and sharing explorations would create a seamless
                        journey for the user.
                    </p>
                    <div className="full-width">
                        <img data-lightbox-group='wireframes' src={getImageSrc('traverse/wireframes1.png')} alt="Wireframes"/>
                        <img data-lightbox-group='wireframes' src={getImageSrc('traverse/wireframes2.png')} alt="More wireframes"/>
                        <img data-lightbox-group='wireframes' src={getImageSrc('traverse/wireframes3.png')} alt="Even more wireframes"/>
                    </div>
                </section>
                <section>
                    <div className="section-header">
                        <h2>Building a Brand</h2>
                        <h6>High fidelity mockups, style guide, InVision prototyping</h6>
                    </div>
                    <p>
                        With the layout from the wireframes, I began to build Traverse's brand. I wanted Traverse to
                        represent excitement, and delight to reflect the feeling of discovering something new. I built
                        a style guide that encompassed Traverse's modern aesthetic with a dark theme, accented with
                        bright colors, and a clean, refined typeface.
                    </p>
                    <div className="full-width">
                        <img data-lightbox-group='style-guide' src={getImageSrc('traverse/traverse_style_guide.png')} alt="Traverse style guide"/>
                    </div>
                    <p>
                        Based on the style guide, I created high fidelity mockups for the screens and built an <a
                            className='highlighted'
                            href='https://invis.io/ZPS2FZ2U98A'
                            rel='noopener noreferrer'
                            target='_blank'
                            onClick={function() { trackLinkClick('traverse_invision') }}>InVision prototype</a> to capture the user journeys
                            through the app and walk the user through key flows.
                    </p>
                </section>
                <div className="screens-container full-width">
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/02Signup.png')} alt="Sign Up Screen"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/configure.png')} alt="Personalize"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/interests.png')} alt="Interests"/>
                    </div>
                </div>
                <div className="screens-container full-width">
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/friends.png')} alt="Friends"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/letsgo.png')} alt="Lets go"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/whereto.png')} alt="Where to"/>
                    </div>
                </div>
                <div className="screens-container full-width">
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/routing.png')} alt="Routing Screen"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/navigation.png')} alt="Navigation"/>
                    </div>
                    <div>
                        <img data-lightbox-group='mockups' data-lightbox-class='no-background' src={getImageSrc('traverse/site.png')} alt="Site"/>
                    </div>
                </div>
                <section>
                    <div className="section-header">
                        <h2>Testing the Waters</h2>
                        <h6>InVision prototyping, usability testing</h6>
                    </div>
                    <p>
                        In addition to the app prototype, I wanted to build a landing page that would allow users early
                        access the the product. As a new concept, I thought a landing page that showed a glimpse of the
                        product would be a great way to test the waters and gauge interest while also gathering
                        potential users to test the app. See the full landing page <a
                            className='highlighted'
                            href='https://invis.io/49ACBERCS#/217769410_Landing_PageA' 
                            rel='noopener noreferrer'>here</a>.
                    </p>
                    <div className="full-width">
                        <img data-lightbox-group='laptop' data-lightbox-class='no-background' src={getImageSrc('traverse/laptop-mockup.png')} alt="Laptop mockup"/>
                    </div>
                </section>
            </div>
        </div>
        )
   }
}
