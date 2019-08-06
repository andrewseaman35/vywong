import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class MyCiteHeader extends Component {
    state = {}

    render () {
        return (
            <div className="project-header">
                <img className='project-image' src={getImageSrc('mycite/mycite_logo_2.png')} alt="MYCITE Logo"/>
                <div className="project-header-content">
                    <div className="row inner">
                        <div className="column first project-text">
                            <div className="project-details">
                                <div className="detail">Product: <strong>iOS/Android App and Web Portal</strong></div>
                                <div className="detail">Year: <strong>2018–2019</strong></div>
                                <div className="detail">Role: <strong>Project Designer, Design Lead</strong></div>
                            </div>
                            <div className="project-intro">
                                <p>
                                    The MYCITE system consists of an FDA-approved native iOS and Android app and a web-based portal.
                                    The MYCITE app tracks pill ingestion of a digestible sensor via a wearable patch on the patient.
                                    The app monitors the patient’s adherence to medication as well as self-reported mood, rest, and activity.
                                </p>
                                <p>
                                    Details of my work on the MYCITE project are under strict NDA.
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images">
                            <div className='project-header-container'>
                                <img src={getImageSrc('mycite/2.2_phone.png')} alt="Welcome"/>
                            </div>
                            <div className='project-header-container'>
                                <img src={getImageSrc('mycite/2.2_phone_tablet_registered.png')} alt="Tablet Registered"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
