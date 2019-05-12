import React, { Component } from 'react';
import { getImageSrc } from '../js/util';

const images = {
    'mycite': getImageSrc('mycite/flower.png'),
    'ybvr_white_label': getImageSrc('ybvr_white_label/headset.svg'),
    'ybvr_brand': getImageSrc('ybvr_brand/ybvr_logo.png'),
    'traverse': getImageSrc('traverse/phone.png'),
    'amma': getImageSrc('amma/phone.png'),
    'other': getImageSrc('vyw_logo.svg'),
}

export default class Tile extends Component {
    state = {
    }

    renderImage() {
        return <img className={this.props.project} src={images[this.props.project]} alt={this.props.title} />;
    }

    render () {

        return (
            <div className={`tile ${this.props.project} ${this.props.size}`}>
              <div className="tile-cover">
                <a href={`/#/${this.props.project}`}>
                    <div className="tile-image">
                        {this.renderImage()}
                    </div>
                    <div className={`title-container ${this.props.project}`}>
                        <div className="title">{this.props.title}</div>
                        <div className="subtitle">{this.props.subtitle}</div>
                    </div>
                </a>
              </div>
          </div>
        )
   }
}
