import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import MyCiteFlower from '../img/mycite/flower.png';
import YbvrBrand from '../img/ybvr_brand/ybvr_logo.png';
import Traverse from '../img/traverse/phone.png';
import Amma from '../img/amma/phone.png';
import VYWLogo from '../img/vyw_logo.svg';

const images = {
    'mycite': MyCiteFlower,
    'ybvr_white_label': getImageSrc('ybvr_white_label/headset.svg'),
    'ybvr_brand': YbvrBrand,
    'traverse': Traverse,
    'amma': Amma,
    'other': VYWLogo,
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
