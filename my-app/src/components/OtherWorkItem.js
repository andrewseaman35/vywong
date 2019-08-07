import React, { Component } from 'react';
import { getImageSrc } from '../js/util';


export default class OtherWorkItem extends Component {
    state = {}

    render () {
        return (
            <div className="item-container">
                <div className={`item-image ${this.props.item}`}>
                    <img src={getImageSrc(this.props.img)} alt=""/>
                </div>
                <div className="item-description">
                    <h2 className="item-title">{this.props.title}</h2>
                    <p className="item-tools">Tools:<strong> {this.props.tools}</strong></p>
                    <p className="item-content">{this.props.content}</p>
                </div>
            </div>
        )
    }
}
