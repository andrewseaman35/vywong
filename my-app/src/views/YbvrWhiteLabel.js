
import React, { Component } from 'react';
import { getImageSrc } from '../js/util';

export default class YbvrWhiteLabel extends Component {
    state = {}

    constructor() {
        super();
        this.scrollToItem = this.scrollToItem.bind(this);
    }

    scrollToItem(el) {
        var item = document.getElementById(el);
        var offset = item.offsetTop - 100;
        var diff=(offset - window.scrollY) / 20;
        if(!window._lastDiff){
            window._lastDiff = 0;
        }

        if (Math.abs(diff) > 1) {
            window.scrollTo(0, (window.scrollY+diff))
            clearTimeout(window._TO)

            if(diff !== window._lastDiff){
                window._lastDiff = diff;
                window._TO=setTimeout(this.scrollToItem, 15, item.id);
            }
        } else {
            window.scrollTo(0, offset);
        }
    }

    render () {
        return (
            <div className='ybvr-white-label'>
                <div className="before-after-container">
                    <div className="before">
                        <h2>Before</h2>
                        <img src={getImageSrc('ybvr_white_label/before.jpg')} alt='YBVR WhiteLabel before' />
                    </div>
                    <div className="after">
                        <h2>After</h2>
                        <img src={getImageSrc('ybvr_white_label/after.jpg')} alt='YBVR WhiteLabel after' />
                    </div>
                </div>
                <div className="content">
                    <div className="iterations">
                        My iterations on the white label focused on enhancing functionality and usability.
                        <blockquote className="quote">
                            <strong className="bold-text-2">
                                <button onClick={() => {this.scrollToItem('typography')}}>Typography within VR</button><br/>
                                <button onClick={() => {this.scrollToItem('usability')}}>Usability enhancements</button><br/>
                                <button onClick={() => {this.scrollToItem('features')}}>Additional features</button>
                            </strong>
                        </blockquote>
                    </div>
                    <section id='typography'>
                        <div className="section-header">
                            <h2>Typography Within VR</h2>
                            <h6>Research, wireframing, rapid prototyping in Unity3D</h6>
                        </div>
                        <p>
                            In the time that I have worked in VR, I have learned that everyone battles with aliasing.
                            The effect occurs in rendering computer graphics and results in a saw-toothed appearance
                            or jaggedness to lines, particularly in curves. The effects of aliasing are particularly
                            noticeable in text and the distortion can cause massive readability issues at a close distance.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/aliasing.png')} alt='Example of Aliasing'/>
                        <p>
                            To become more familiar with the issue, I started out by conducting research. I found that
                            typographic aliasing in VR occurs the most with thin lines and extraneous strokes, many of
                            which reflected our original choices. I set out to find a typeface that would both combat
                            aliasing and be visually appealing. I focused my search of typefaces to medium-weight sans
                            serifs, more specifically, typefaces that were thick enough to resist distortion yet be
                            readable at a distance, as well as thin enough to avoid unwanted bulging of strokes due to
                            aliasing. After sifting through a plethora of san serif typefaces, I narrowed down my list
                            to Cabin Regular, Avenir Medium, Clear Sans Light, and Oculus Sans.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/text_comparison.png')} alt='Text Comparison'/>
                        <p>
                            With the shortlist of typefaces, I prepared different test cases to see the effects of
                            typographic aliasing on legibility of the letters and readability of the content against
                            different backgrounds. Because the white label could be customized differently per user,
                            I needed to account for changes in backgrounds and to assure that the contrast of the text
                            against the various colors would be reliable. With this in mind, I created multiple rounds
                            of testing which including testing the different typefaces, multiple font sizes, and
                            varying background treatments. After each round of testing, I gathered the best in each
                            category and created a final round of testing to see the most readable combination of
                            typefaces, font sizes, and background treatments.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/typography.gif')} alt="Typography"/>
                        <p>
                            For my rounds of testing, I recruited individuals with ample years of video streaming
                            experience. Although the targeted user for the white label application would most likely
                            not have the same type of background, I wanted run tests with individuals could immediately
                            point out aliasing or text distortion. By doing so, I could be assured that when I finished
                            my tests, the results would yield the most readable text in VR with the least amount of
                            aliasing.
                        </p>
                        <p>
                            After running numerous test cases, Avenir Medium with a semi-transparent gradient proved
                            to be the most readable option with the highest resilience to aliasing, distortion, and
                            change in background.
                        </p>
                    </section>
                    <section id='usability'>
                        <h2>Usability Enhancements</h2>
                        <h6>User research, sketching, wireframing, testing</h6>
                        <p>
                            My next step in enhancing the white label was to optimize usability. In order to allow
                            users to customize and tailor the application to their needs, the layout of the white
                            label needed to be dynamic. The first part of this enhancement was to research and
                            understand how to modify the UI elements within VR so that the user could access the content
                            while not feeling overwhelmed by every possible menu option.
                        </p>
                        <p>
                            Understanding comfort and ease of use in VR is best discovered while in VR; much of my
                            research included testing other VR applications and recording how I felt when using the
                            different types of menus. My process also incorporated feedback from several other
                            individuals with varying amounts of exposure to VR going through the same applications.
                            From the results, I found two significant insights.
                        </p>
                        <blockquote className="quote">
                            <strong className="bold-text-2">
                                1. Looking at eye level and downwards is much easier than craning the neck to look up.<br/>
                                2. Rotating your head to look at content was far easier than turning your whole body.<br/>
                            </strong>
                        </blockquote>
                        <p>
                            Both of these insights gave me a good starting point for a comfortable field of view (FOV) in VR.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/fov_diagram.png')} alt="Field of View Diagram"/>
                        <p>
                            With this optimal FOV in mind, I needed to apply this towards the enhancement of the white
                            label. The scope now included the ability to add more layouts as well as optimize the user’s
                            FOV for comfort and usability. I needed to take into consideration different situations in
                            which customers would want to change their layout and how I could design a layout that
                            would be scalable and versatile. I decided that a modular design would be the best option
                            to create various layouts while still maintaining a simple aesthetic. The modular sections
                            included a gallery, a categories, and a featured module which could be arranged in any order.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/modules.png')} alt="Modules"/>
                        <p>
                            By creating elements with the same height, the modular pieces would be able to fit together
                            in any horizontal order as well as cap the maximum height of the UI elements which would
                            ensure that the user would not need to strain their neck to look at elements above and below
                            the ideal FOV container. I found that even if there was an unbalanced number of modals in the
                            layout, the user’s FOV should be centered with the main element rather than centering the
                            entire layout with the FOV. User feedback showed that because of the close proximity to UI
                            elements, it was felt more comfortable to center the eye with the most important element
                            than with the entire layout.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/fov_alignment.png')} alt="Field of View Alignment"/>
                        <p>
                            In addition to the maximum height, the horizontal length of the layout and distance of the
                            UI from the camera needed to be taken into consideration for maximizing usability. The
                            longer the layout extended horizontally, the farther the side elements would appear from
                            the camera. This difference in distance affected the appearance of the layout, quality of
                            the images, and the readability of the text. By creating a curved UI layout, the distance
                            between the user and the content would remain the same, preventing distortion of imagery
                            or text. In addition, I limited the length of the layout to half the circumference
                            surrounding the user’s location to avoid the need to turn their head beyond 180°.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/curved_ui.png')} alt="Curved UI"/>
                        <p>
                            After testing the maximum height and length with several users, I found that the curved
                            layout did greatly improve usability for user. When presenting the modular layouts with
                            the YBVR development team, I received both positive and negative feedback. Although the
                            modular layout would significantly increase customizability for customers, the technical
                            feasibility of dynamically adding modules would require ample research and time to
                            implement. To find balance between benefits for the user and technical limitations, I
                            decided on three variations of the modular layouts to allow customizability while still
                            minimizing technical capacity.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/white_label_options.png')} alt="White Label Options"/>
                        <p>
                            Several months after this white label version, we were able to iterate on the modular
                            concept and implement the full dynamic layout, giving the user the freedom to choose
                            and order the modular and completely customize the layout.
                        </p>
                    </section>
                    <section id='features'>
                        <div className="section-header">
                            <h2>Additional Features</h2>
                            <h6>Research, user flows, wireframes, prototypes, usability testing</h6>
                        </div>
                        <p>
                            After enhancing the usability of the white label application, I focused on designing
                            three additional features that would create a more detailed and mature platform.
                        </p>
                        <blockquote className="quote">
                            <strong className="bold-text-2">
                                Sliders<br/>
                                Categories
                            </strong>
                        </blockquote>
                        <p>
                            For the implementation of the sliders, I needed to understand and define interfaces
                            and interactions that would make the slider intuitive and easy to use in VR. As YBVR
                            was developing the platform for Samsung GearVR and Google Daydream, I needed to take
                            into account the features of the headsets themselves; the GearVR has a touchpad on
                            the headset with tap and swipe capabilities and an optional handheld controller while
                            the Daydream requires the use of a controller to interact with the interface. With an
                            understanding of these varying types of interactions, I focused on two types of page
                            indicators.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/slider_options.png')} alt="Slider Options"/>
                        <p>
                            The options above show two possible locations for the slider arrows and styles for
                            page indicators. After testing the different combinations of the variables, I found
                            that having arrows centered at the bottom of the panel made it easier for user to
                            access. This option also ensured a consistent location for the slider arrows
                            regardless of the panel width. The feedback from the testing showed that although
                            the nav dots were more intuitive for swiping, users preferred the page numbers for
                            reference. I also determined that having the numbers were more accessible and scalable.
                        </p>
                        <p>
                            During the prototype testing, I also found an unexpected reaction: when users reached
                            the last page, if the panel did not have the normal number of videos, users assumed
                            that the videos had not finished loading. This feedback conveyed to me that I needed
                            to implement an empty state that would show the end of the list of the videos.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/home_empty_state.png')} alt="Home empty state"/>
                        <p>
                            The next feature I focused on creating was categories. Adding categories to the white
                            label allowed for sorting videos into sections, which would improve the user’s ability
                            to browse and search through videos.
                        </p>
                        <img src={getImageSrc('ybvr_white_label/home_categories.png')} alt="Home categories"/>
                    </section>
                </div>
            </div>
        )
   }
}
