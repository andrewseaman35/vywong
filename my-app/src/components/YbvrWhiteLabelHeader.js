import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class YbvrWhiteLabelHeader extends Component {
    state = {}

    render () {
        return (
            <div className="project-header">
                <img className='project-image' src={getImageSrc('traverse/traverse_logo.png')} alt="Traverse"/>
                <div className="project-header-content">
                    <div className="row inner">
                        <div className="column first project-text">
                            <div className="project-details">
                                <div className="detail">Product: <strong>iOS App</strong></div>
                                <div className="detail">Duration: <strong>3 weeks</strong></div>
                                <div className="detail">Role: <strong>Project Designer</strong></div>
                            </div>
                            <div className="project-intro">
                                <p>
                                    YBVR header
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images">
                            <img className='project-header-image first' src={getImageSrc('traverse/whereto.png')} alt="Where to"/>
                            <img className='project-header-image' src={getImageSrc('traverse/routing.png')} alt="Routing"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
