import React, { Component } from 'react';
import MyCiteFlower from '../img/mycite_flower.png';

const images = {
    'mycite': MyCiteFlower,
}

export default class Tile extends Component {
    state = {
    }

    renderImage() {
        return <img src={images[this.props.project]} alt={this.props.title} />;
    }

    render () {

        return (
            <div className={`tile ${this.props.project}`}>
              <div className="tile-cover">
                <a href='/'>
                    <div className="tile-image">
                        {this.renderImage()}
                    </div>
                    <div className="title-container">
                        <div className="title">{this.props.title}</div>
                        <div className="subtitle">{this.props.subtitle}</div>
                    </div>
                </a>
              </div>
          </div>
        )
   }
}
