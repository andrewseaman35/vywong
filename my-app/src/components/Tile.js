import React, { Component } from 'react';


export default class Tile extends Component {
    state = {
    }

    render () {

        return (
            <div className={`tile ${this.props.project} ${this.props.size}`}>
            <a href={`/#/${this.props.project}`}>
                <div className={`tile-image ${this.props.project}`}>
                    <div className={`tile-cover ${this.props.project}`}>
                        <div className="title-container">
                            <div className="title">{this.props.title}</div>
                            <div className="subtitle">{this.props.subtitle}</div>
                        </div>
                    </div>
                </div>
            </a>
          </div>
        )
   }
}
