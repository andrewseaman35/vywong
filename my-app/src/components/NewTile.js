import React, { Component } from 'react';


export default class NewTile extends Component {
    state = {
    }

    onClick() {
        window.location = `/#/${this.props.project}`;
    }

    render () {

        return (
            <div className={`tile item ${this.props.side} ${this.props.project}`} onClick={this.onClick.bind(this)}>
                <div className="tile-title">
                    <div className="title">{this.props.title}</div>
                    <div className="subtitle">{this.props.subtitle}</div>
                </div>
          </div>
        )
   }
}
