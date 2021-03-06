import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class AmmaHeader extends Component {
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
                                <div className="detail">Duration: <strong>3 Weeks</strong></div>
                                <div className="detail">Role: <strong>Project Designer</strong></div>
                            </div>
                            <div className="project-intro">
                                <p>
                                    AMMA is a conceptual asthma monitoring and management app which
                                    helps individuals with asthma gain real-time data about their
                                    asthmatic triggers as well as long-term insights of asthma trends
                                    over time. AMMA works by tracking vitals via a wearable device
                                    and combining that data with user-inputted information to
                                    calculate risk of an asthma attack in order to help users predict
                                    and prevent any incident from happening.
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images">
                            <div className='project-header-container'>
                                <img src={getImageSrc('amma/1dashboard.png')} alt="Dashboard"/>
                            </div>
                            <div className='project-header-container'>
                                <img src={getImageSrc('amma/2history_logs.png')} alt="History Logs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
