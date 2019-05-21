import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getImageSrc } from '../js/util';
import { trackLightbox } from '../js/tracking';


class Lightbox extends Component {
    imagesByGroupId = {}
    state = {
        isOpen: false,
        currentGroup: null,
        currentImageIndex: 0,
    }

    componentWillMount() {
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    componentDidMount() {
        const imageElements = document.getElementsByTagName('img');
        for (let i = 0; i < imageElements.length; i++) {
            const image = imageElements[i];
            const lightboxGroup = image.dataset['lightboxGroup'];
            if (lightboxGroup) {
                if (!(lightboxGroup in this.imagesByGroupId)) {
                    this.imagesByGroupId[lightboxGroup] = [];
                }
                const additionalClass = image.dataset['lightboxClass'] ? image.dataset['lightboxClass'] : '';
                this.imagesByGroupId[lightboxGroup].push({
                    src: image.src,
                    class: additionalClass
                });
                image.style.cursor = 'pointer';
                image.addEventListener('click', (function() {
                    this.open(lightboxGroup, image.src);
                }).bind(this));
            }
        }
    }

    getCurrentImage() {
        return this.imagesByGroupId[this.state.currentGroup][this.state.currentImageIndex].src;
    }

    getCurrentClass() {
        return this.imagesByGroupId[this.state.currentGroup][this.state.currentImageIndex].class;
    }

    previous() {
        trackLightbox(this.props.page, 'previous', this.state.currentGroup);
        const currentGroupImages = this.imagesByGroupId[this.state.currentGroup];
        let nextImageIndex = (this.state.currentImageIndex - 1) % currentGroupImages.length;
        if (nextImageIndex < 0) {
            nextImageIndex = currentGroupImages.length - 1;
        }

        this.setState({
            currentImageIndex: nextImageIndex,
        })
    }

    next() {
        trackLightbox(this.props.page, 'next', this.state.currentGroup);
        const currentGroupImages = this.imagesByGroupId[this.state.currentGroup];
        const nextImageIndex = (this.state.currentImageIndex + 1) % currentGroupImages.length;
        this.setState({
            currentImageIndex: nextImageIndex,
        })
    }

    close(e) {
        if (e.target.dataset['closeLightbox'] === 'true') {
            this.setState({
                currentGroup: null,
                currentImageIndex: -1,
                isOpen: false,
            })
        }
    }

    open(group, imgSrc) {
        const imagesInGroup = this.imagesByGroupId[group];
        const imageIndex = imagesInGroup.map(function(e) { return e.src; }).indexOf(imgSrc);

        if (imageIndex >= 0) {
            trackLightbox(this.props.page, 'open', group);
            this.setState({
                currentGroup: group,
                currentImageIndex: imageIndex,
                isOpen: true,
            })
            this.forceUpdate();
        }
    }

    renderDots() {
        const imagesInGroup = this.imagesByGroupId[this.state.currentGroup];
        if (imagesInGroup.length > 1) {
            const elements = [];
            for (let i = 0; i < imagesInGroup.length; i++) {
                const className = i === this.state.currentImageIndex ? 'lightbox-dot selected' : 'lightbox-dot';
                elements.push(
                    <div key={i} className={className}></div>
                )
            }
            return elements;
        }
        return null;
    }

    render () {
        if (!this.state.isOpen || !this.state.currentGroup) {
            return null;
        }
        const disableArrowButton = this.imagesByGroupId[this.state.currentGroup].length === 1;
        const arrowButtonClass = disableArrowButton ? 'disabled' : '';
        return (
            <div className={`lightbox-container hide-for-small-screen ${this.getCurrentClass()}`}>
                <div className="lightbox-close">
                    <img src={getImageSrc('assets/close.svg')} data-close-lightbox='true' alt="Close" onClick={this.close}/>
                </div>
                <div id='lightbox-outer' className='lightbox' data-close-lightbox='true' onClick={this.close}>
                    <div id='lightbox-previous' className={`lightbox-control ${arrowButtonClass}`}>
                        <img src={getImageSrc('assets/left_arrow.svg')} alt="Previous" onClick={this.previous}/>
                    </div>
                    <div className="lightbox-content">
                        <img src={this.getCurrentImage()} alt=""/>
                    </div>
                    <div id='lightbox-next' className={`lightbox-control ${arrowButtonClass}`}>
                        <img src={getImageSrc('assets/right_arrow.svg')} alt="Next" onClick={this.next}/>
                    </div>
                </div>
                <div className="lightbox-dots">
                    {this.renderDots()}
                </div>
            </div>
        )
   }
}

export default function initLightbox(page, el) {
    ReactDOM.render(<Lightbox page={page}/>, document.getElementById(el));
}
