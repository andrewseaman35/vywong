import React, { Component } from 'react';
import MyCiteFlower from '../img/mycite_flower.png';
import YbvrWhiteLabel from '../img/ybvr_white_label.svg';
import YbvrBrand from '../img/ybvr_brand_logo.png';
import Traverse from '../img/traverse_phone.png';
import Amma from '../img/amma_front.png';
import VYWLogo from '../img/vyw_logo.svg';

const images = {
    'mycite': MyCiteFlower,
    'ybvr_white_label': YbvrWhiteLabel,
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
