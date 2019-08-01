import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class TraverseHeader extends Component {
    state = {}

    render () {
        return (
            <div className="project-header">
                <img className='project-image' src={getImageSrc('amma/amma_logo.png')} alt="AMMA Logo"/>
                <div className="project-header-content">
                    <div className="row inner">
                        <div className="column first project-text">
                            <div className="project-details">
                                <div className="detail">Product: <strong>Android App</strong></div>
                                <div className="detail">Duration: <strong>3 weeks</strong></div>
                                <div className="detail">Role: <strong>Project Designer</strong></div>
                            </div>
                            <div className="project-intro">
                                <p>
                                    MyCite
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images">
                            <img className='project-header-image first' src={getImageSrc('amma/key_1_dashboard.png')} alt="Dashboard"/>
                            <img className='project-header-image' src={getImageSrc('amma/key_4_history_logs.png')} alt="History Logs"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
