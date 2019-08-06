import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class TraverseHeader extends Component {
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
                                    Traverse is a mobile app that helps individuals explore their surrounding areas.
                                    By creating customizable routes, people can discover new sites around them and
                                    still make their way to their destinations. Traverse automatically finds, maps,
                                    and navigates you to unique places of interest, so you can spend more time exploring.
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images">
                            <div className='project-header-container'>
                                <img src={getImageSrc('traverse/whereto.png')} alt="Where to"/>
                            </div>
                            <div className='project-header-container'>
                                <img src={getImageSrc('traverse/routing.png')} alt="Routing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
