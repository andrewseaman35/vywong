import React, { Component } from 'react';
import LoadMoreButton from '../components/LoadMoreButton';
import { getImageSrc } from '../js/util';
import { ScrollTracker, trackLinkClick } from '../js/tracking';


export default class YbvrWhiteLabel extends Component {
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
        new ScrollTracker('ybvr_white_label');
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
            <div id='lightbox'></div>
            <div className="inner">
                <section className="block-statement">
                    It could be the best experience, <strong>if only VR didn’t make people motion sick and uncomfortable.</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            As their UI/UX designer, I was tasked to improve the UI for their VR streaming platform. Their existing 
                            UI did not reduce aliasing and could not accommodate more than six videos. Per their B2B business model, 
                            they wanted their white label platform to be customizable to customers and approachable to end users. 
                        </p>
                        <p>
                            With little knowledge or experience of VR beyond my own memories of getting motion sickness within VR, 
                            I prioritized learning about virtual reality before attempting to design for it. Through my interviews 
                            with VR experts a.k.a the YBVR founders, analysis of other VR platforms, and reading into articles, 
                            I found that by minimizing aliasing and optimizing field of view (FOV), I could build a foundation for 
                            the VR video platform. 
                        </p>
                    </div>
                    <div className="column">
                        <img src={getImageSrc('ybvr_white_label/before.png')} alt="Before"/>
                    </div>
                </section>
                <section className="block-statement">
                    <strong>Immersing yourself in the problem</strong> can bring you face to face with the solution.
                </section>
                <section className='no-margin'>
                    <div className="column first">
                        <p>
                            In order to reduce aliasing in typography, I ran countless A/B tests to determine which typeface and 
                            font size would be most resistant to aliasing. During this process of trial and error, I found that 
                            the readability of text was also dependant on the background behind the text, which was unpredictable 
                            with changing backgrounds and different videos. By optimizing typography within VR as well as figuring 
                            out how to accommodate for unpredictable backgrounds, the usability and comfortableness of the features 
                            within VR are greatly improved.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            After getting a handle on aliasing, I turned my attention to understanding how to optimize the field of 
                            view (FOV) of VR so that I could build a foundation for the VR video platform. During my research of FOV 
                            and initial tests of layout mockups, I found that people naturally grouped sections of videos by how they 
                            were visually placed. 
                        </p>
                        <p>
                            This realization gave me the idea to propose a modular construction of the UI, which allowed YBVR customers 
                            to tailor the UI to the video content they wanted to feature. The modules of videos also provided end users 
                            with an assortment of videos without overwhelming them with content. 
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/after.png')} alt="After"/>
                </section>
                <LoadMoreButton
                    hide={this.state.hideButton}
                    onClick={this.showProcessContent}
                />
            </div>
            <div id='process-content' ref={this.processRef} className={`project-content inner ${processClass}`}>
                <section className="block-statement">
                    If you can’t read it, <strong>why would you be interested in interacting with it?</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            In the time that I have worked in VR, I have learned that everyone battles with aliasing. The effect occurs 
                            in rendering computer graphics and results in a saw-toothed appearance or jaggedness to lines, particularly
                            in curves. The effects of aliasing are particularly noticeable in text and the distortion can cause massive 
                            readability issues at a close distance.
                        </p>
                    </div>
                    <div className="column">
                        <img src={getImageSrc('ybvr_white_label/aliasing1.png')} alt="Aliasing"/>
                    </div>
                </section>
                <section className="block-statement">
                    <strong>So I tested and tested until I couldn’t test anymore.</strong> 
                    And then I ran the same tests with everyone else.
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            To become more familiar with the issue, I started out by conducting research. I found that typographic 
                            aliasing in VR occurs the most with thin lines and extraneous strokes, many of which reflected our original 
                            choices. I set out to find a typeface that would both combat aliasing and be visually appealing. I focused 
                            my search of typefaces to medium-weight sans serifs, more specifically, typefaces that were thick enough to 
                            resist distortion yet be readable at a distance, as well as thin enough to avoid unwanted bulging of strokes
                            due to aliasing. After sifting through a plethora of sans serif typefaces, I narrowed down my list to Cabin 
                            Regular, Avenir Medium, Clear Sans Light, and Oculus Sans.
                        </p>
                    </div>
                    <div className="column">
                        <img src={getImageSrc('ybvr_white_label/aliasing2.png')} alt="Typography Options"/>
                    </div>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            With the shortlist of typefaces, I prepared different test cases to see the effects of typographic aliasing 
                            on legibility of the letters and readability of the content against different backgrounds. Because the white
                            label could be customized differently per user, I needed to account for changes in backgrounds and to assure 
                            that the contrast of the text against the various colors would be reliable. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            With this in mind, I created multiple rounds of testing which including testing the different typefaces, 
                            multiple font sizes, and varying background treatments. After each round of testing, I gathered the best 
                            in each category and created a final round of testing to see the most readable combination of typefaces, 
                            font sizes, and background treatments.
                        </p>
                    </div>
                </section>
                <section className="full-image no-margin">
                    <img src={getImageSrc('ybvr_white_label/typography.gif')} alt="Typography Treatment"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            For my rounds of testing, I recruited individuals with ample years of video streaming experience. Although 
                            the targeted user for the white label application would most likely not have the same type of background, 
                            I wanted run tests with individuals could immediately point out aliasing or text distortion. By doing so, 
                            I could be assured that when I finished my tests, the results would yield the most readable text in VR with 
                            the least amount of aliasing.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            After running numerous test cases, Avenir Medium with a semi-transparent gradient proved to be the most 
                            readable option with the highest resilience to aliasing, distortion, and change in background.
                        </p>
                    </div>
                </section>
                <section className="block-statement">
                    VR can sometimes be too immersive, causing an 
                    <strong>uncomfortable feeling of being overwhelmed by content.</strong>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            My next step in enhancing the white label was to optimize usability. In order to allow users to customize 
                            and tailor the application to their needs, the layout of the white label needed to be dynamic. The first 
                            part of this enhancement was to research and understand how to modify the UI elements within VR so that 
                            the user could access the content while not feeling overwhelmed by every possible menu option.
                        </p>
                        <p>
                            Understanding comfort and ease of use in VR is best discovered while in VR; much of my research included 
                            testing other VR applications and recording how I felt when using the different types of menus. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            My process also incorporated feedback from several other individuals with varying amounts of exposure 
                            to VR going through the same applications. From the results, I found two significant insights.
                        </p>
                        <blockquote className="quote">
                            1. Looking at eye level and downwards is much easier than craning the neck to look up.<br/>
                            2. Rotating your head to look at content was far easier than turning your whole body.
                        </blockquote>
                        <p>
                            Both of these insights gave me a good starting point for a comfortable field of view (FOV) in VR.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/usability1.png')} alt="FOV"/>
                </section>
                <section className="block-statement">
                    Modular design offers <strong>simplicity, customizability, and endless organizability</strong> of video content.
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            With this optimal FOV in mind, I applied it towards the enhancement of the white label. The scope now 
                            included the ability to add more layouts as well as optimize the user’s FOV for comfort and usability. 
                            I needed to take into consideration different situations in which customers would want to change their 
                            layout and how I could design a layout that would be scalable and versatile. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            I decided that a modular design would be the best option to create various layouts while still maintaining 
                            a simple aesthetic. The modular sections included a gallery, a categories, and a featured module which 
                            could be arranged in any order.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/modules_2.png')} alt="Modules"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            By creating elements with the same height, the modular pieces would be able to fit together in any 
                            horizontal order as well as cap the maximum height of the UI elements which would ensure that the user 
                            would not need to strain their neck to look at elements above and below the ideal FOV container.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            I found that even if there was an unbalanced number of modals in the layout, the user’s FOV should 
                            be centered with the main element rather than centering the entire layout with the FOV. User feedback 
                            showed that because of the close proximity to UI elements, it felt more comfortable to center the eye 
                            with the most important element than with the entire layout.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/usability2.png')} alt="Centered UI Elements"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            In addition to the maximum height, the horizontal length of the layout and distance of the UI from 
                            the camera needed to be taken into consideration for maximizing usability. The longer the layout 
                            extended horizontally, the farther the side elements would appear from the camera. This difference 
                            in distance affected the appearance of the layout, quality of the images, and the readability of the text. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            By creating a curved UI layout, the distance between the user and the content would remain the same, 
                            preventing distortion of imagery or text. In addition, I limited the length of the layout to half 
                            the circumference surrounding the user’s location to avoid the need to turn their head beyond 180°.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/menu_ui.png')} alt="Main UI"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            After testing the maximum height and length with several users, I found that the curved layout did 
                            greatly improve usability for user. When presenting the modular layouts with the YBVR development team, 
                            I received both positive and negative feedback. Although the modular layout would significantly increase 
                            customizability for customers, the technical feasibility of dynamically adding modules would require 
                            ample research and time to implement. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            To find balance between benefits for the user and technical limitations, I decided on three variations 
                            of the modular layouts to allow customizability while still minimizing technical capacity.
                        </p>
                        <p>
                            Several months after this white label version, we were able to iterate on the modular concept and 
                            implement the full dynamic layout, giving the user the freedom to choose and order the modular and 
                            completely customize the layout.
                        </p>
                    </div>
                </section>
                <section className="block-statement">
                    With the addition of even more videos, <strong>we needed to build more modules</strong> 
                    to accommodate the added content. 
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            After enhancing the usability of the white label application, I focused on designing additional features 
                            that would create a more detailed and mature platform:
                        </p>
                        <blockquote className="quote">
                            Sliders<br/>
                            Video Description
                        </blockquote>
                        <p>
                            As YBVR was developing the platform for Samsung GearVR and Google Daydream, I needed to take into account 
                            the features of the headsets themselves; the GearVR has a touchpad on the headset with tap and swipe 
                            capabilities and an optional handheld controller while the Daydream requires the use of a controller 
                            to interact with the interface. Because interacting with the interaction in VR is less common, I also 
                            wanted a clear indication of what elements were clickable.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            For the slider, I designed two options to show possible locations for the slider arrows and styles 
                            for page indicators. After testing the different combinations of the variables, I found that having 
                            arrows centered at the bottom of the panel made it easier for the user to access. This option also 
                            ensured a consistent location for the slider arrows regardless of the panel width. 
                        </p>
                        <p>
                            The feedback from the testing showed that although the nav dots were more intuitive for swiping, 
                            users preferred the page numbers for reference. I also determined that having the numbers were 
                            more accessible and scalable.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('ybvr_white_label/slider_options_2.png')} alt="Slider Options"/>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            During the prototype testing, I also found an unexpected reaction: when users reached the last 
                            page, if the panel did not have the normal number of videos, users assumed that the videos had 
                            not finished loading. This feedback conveyed to me that I needed to implement an empty state 
                            that would show the end of the list of the videos.
                        </p>
                    </div>
                    <div className="column">
                        <img src={getImageSrc('ybvr_white_label/home_empty_state_2.png')} alt="Empty State"/>
                    </div>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            To implement the video descriptions, I referenced prior research about optimal field of view 
                            in order to determine the best location for the description box. While testing initial ideas, 
                            I found that navigating between the videos and the description was least disruptive when being 
                            able to see the videos in the background. Introducing the video description button on the video 
                            gallery page required clear hover states so that the user could see what button their cursor was on. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            Adding these features to the white label brought more depth to the product, allowing YBVR to 
                            showcase more content within an adaptable, customizable product. 
                        </p>
                    </div>
                </section>
                <section className="dual-text">
                    <div className="column first">
                        <img src={getImageSrc('ybvr_white_label/video_description.png')} alt="Video Description"/>
                    </div>
                    <div className="column">
                    <img src={getImageSrc('ybvr_white_label/video_description_modal.png')} alt="Video Description Modal"/>  
                    </div>
                </section>
            </div>
        </div>
        )
   }
}
