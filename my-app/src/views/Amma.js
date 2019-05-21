import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import initLightbox from '../components/Lightbox';

export default class Amma extends Component {
    state = {}

    componentDidMount() {
        initLightbox('amma', 'lightbox')
    }

    render () {
        return (
        <div className='amma'>
            <div id='lightbox'></div>
            <div className="content">
                <div className="top-image full-width">
                    <div>
                        <img data-lightbox-group='watch_layout' data-lightbox-class='no-background' src={getImageSrc('amma/phone_watch_layout.png')} alt="Mockups"/>
                    </div>
                </div>
                <section>
                    <div className="section-header">
                        <h2>Building with Asthma</h2>
                    </div>
                    <p>
                        As an individual without asthma, I wanted to gather information from first hand experiences
                        of individuals living with asthma. I conducted interviews and heard about their recollections
                        of having asthma attacks as well as how they have learned to cope with living with asthma.
                        Based on the interviews, I found that although the individuals were diagnosed and treated for
                        asthma, they did not know what would always cause their asthma attacks. This lack of certainty
                        often lead people to feel weary and held back by their asthma.
                    </p>
                    <div className="full-width">
                        <img data-lightbox-group='persona' data-lightbox-class='no-background' src={getImageSrc('amma/persona.jpg')} alt="Persona"/>
                    </div>
                    <p>
                        With the persona in mind, I wrote out user scenarios that I wanted to make sure the app would
                        accommodate. The scenarios focused on monitoring and tracking asthmatic triggers and inhaler usage.
                    </p>
                    <div className="screens-container full-width user-stories">
                        <div>
                            <img data-lightbox-group='user_stories' src={getImageSrc('amma/user_story_1.png')} alt="User Story"/>
                        </div>
                        <div>
                            <img data-lightbox-group='user_stories' src={getImageSrc('amma/user_story_2.png')} alt="User Story"/>
                        </div>
                        <div>
                            <img data-lightbox-group='user_stories' src={getImageSrc('amma/user_story_3.png')} alt="User Story"/>
                        </div>
                    </div>
                    <p>
                        I envisioned an app that could deliver real-time information about asthmatic triggers and offer
                        insights based on historically accumulated personal data. I found the following features to be
                        crucial in informing the user of current conditions and accumulating data for long-term analysis:
                    </p>
                    <blockquote className="quote">
                        <strong className="bold-text-2">
                            Recent activity and risk meter<br/>
                            Adding an asthmatic episode<br/>
                            Cumulative logs of historical data
                        </strong>
                    </blockquote>
                    <div className="screens-container full-width">
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_1.png')} alt="Dashboard wireframe"/>
                        </div>
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_2.png')} alt="Asthma log wireframe"/>
                        </div>
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_3.png')} alt="Reminders wireframe"/>
                        </div>
                    </div>
                    <div className="screens-container full-width">
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_4.png')} alt="Graph wireframe"/>
                        </div>
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_5.png')} alt="Summary wireframe"/>
                        </div>
                        <div>
                            <img data-lightbox-group='wireframes' src={getImageSrc('amma/wireframe_6.png')} alt="Profile wireframe"/>
                        </div>
                    </div>
                    <p>
                        After building the initial wireframes, I created high fidelity mockups and a walkthrough
                        prototype to access the effectiveness of the layout and UI elements.
                    </p>
                    <div className="screens-container full-width">
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_1_dashboard.png')} alt="Dashboard"/>
                        </div>
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_2_dashboard.png')} alt="Dashboard"/>
                        </div>
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_3_asthma_log.png')} alt="Asthma Log"/>
                        </div>
                    </div>
                    <div className="screens-container full-width">
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_4_history_logs.png')} alt="History Logs"/>
                        </div>
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_5_history_logs.png')} alt="History Logs"/>
                        </div>
                        <div>
                            <img data-lightbox-group='key_screens' data-lightbox-class='no-background' src={getImageSrc('amma/key_6_account.png')} alt="Account"/>
                        </div>
                    </div>
                    <p>
                        Although users navigated smoothly through the prototype, I found that the asthma logging
                        page had too much information, which sometimes overwhelmed the user and discouraged them
                        from filling it out. This feedback suggested that the asthma logging process is ineffective
                        and needs to be streamlined. For future iterations of the project, I would revisit ways
                        to make user entry easier and more approachable.
                    </p>
                </section>
                <section>
                    <div className="section-header">
                        <h2>Reflecting on a Hypothesis</h2>
                    </div>
                    <p>
                        After working on the <a className='highlighted' href='/#/mycite'>MYCITE project</a> and understanding the thoroughness of human factor
                        studies in relation to medical devices, I wanted to reflect on AMMA as a viable medicine
                        companion app.
                    </p>
                    <p>
                        Although the risk percentage could give insights, I would be concerned that the chance of
                        unnecessary alarm or fear could cause a counterproductive reaction and trigger stress-related
                        asthmatic symptoms. In addition, being informed that the user is at high risk for an asthma
                        attack based on a predictable could cause them to preemptively take medication or seek
                        medical attention before it is necessary. Without extensive scientific research and testing,
                        I do not believe the risk meter would be a viable feature for the AMMA product.
                    </p>
                    <p>
                        I think the AMMA product could pivot its focus to the value of its historically accumulated
                        personal data. The accumulation of data could give the user a better understanding of
                        potential triggers through the app’s active and passive data collection. The app would
                        collect input from the user’s perceptions on their asthma and information on environmental
                        data. There would still need to be a clear statement to that the information is predictive
                        and not diagnostic.
                    </p>
                </section>
            </div>
        </div>
        )
   }
}
