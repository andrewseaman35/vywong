import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getImageSrc } from '../js/util';


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
                this.imagesByGroupId[lightboxGroup].push(image.src);
                image.style.cursor = 'pointer';
                image.addEventListener('click', (function() {
                    this.open(lightboxGroup, image.src);
                }).bind(this));
            }
        }
    }

    getCurrentImage() {
        return this.imagesByGroupId[this.state.currentGroup][this.state.currentImageIndex];
    }

    previous() {
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
        const imageIndex = imagesInGroup.indexOf(imgSrc);
        if (imageIndex >= 0) {
            this.setState({
                currentGroup: group,
                currentImageIndex: imageIndex,
                isOpen: true,
            })
        }
    }

    render () {
        if (!this.state.isOpen || !this.state.currentGroup) {
            return null;
        }
        return (
            <div className="lightbox-container">
                <div className="lightbox-close">
                    <img src={getImageSrc('assets/close.svg')} data-close-lightbox='true' alt="Close" onClick={this.close}/>
                </div>
                <div id='lightbox-outer' className='lightbox' data-close-lightbox='true' onClick={this.close}>
                    <div id='lightbox-previous' className="lightbox-control">
                        <img src={getImageSrc('assets/left_arrow.svg')} alt="Previous" onClick={this.previous}/>
                    </div>
                    <div className="lightbox-content">
                        <img src={this.getCurrentImage()} alt=""/>
                    </div>
                    <div id='lightbox-next' className="lightbox-control">
                        <img src={getImageSrc('assets/right_arrow.svg')} alt="Next" onClick={this.next}/>
                    </div>
                </div>
            </div>
        )
   }
}

export default function initLightbox(el) {
    ReactDOM.render(<Lightbox />, document.getElementById(el));
}
