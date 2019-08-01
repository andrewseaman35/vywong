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
                            At Mobiquity, I worked on the MYCITE system to build a native iOS and Android 
                            app and web-based portal. As a FDA-regulated product, the MYCITE product depends 
                            on human factor studies and development of new features that focus user’s 
                            comprehension of tasks in order to optimize the efficiency, safety, and ease 
                            of learning for their targeted users. 
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            As the lead designer on the project, I guided the development of app designs 
                            and documentation for the product's FDA submission and built mockups and 
                            prototypes for user testing. Working under a heavily-regulated medical product, 
                            design concepts were geared toward clear, easy to understand information and 
                            interactions with directions and guidance. We geared our designs to straightforward 
                            content and clear interactions in order to remove unnecessary interpretation or confusion.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('mycite/mycite_packaging.png')} alt="Mycite Packaging"/>
                </section>
                
            </div>
        </div>
        )
   }
}
