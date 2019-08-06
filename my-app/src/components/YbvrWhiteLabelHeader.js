import React, { Component } from 'react';

import { getImageSrc } from '../js/util';

export default class YbvrWhiteLabelHeader extends Component {
    state = {}

    render () {
        return (
            <div className="project-header">
                <img className='project-image' src={getImageSrc('ybvr_white_label/ybvr_logo.png')} alt="YBVR"/>
                <div className="project-header-content">
                    <div className="row inner">
                        <div className="column first project-text">
                            <div className="project-details">
                                <div className="detail">Product: <strong>Virtual Reality</strong></div>
                                <div className="detail">Year: <strong>2017–2018</strong></div>
                                <div className="detail">Role: <strong>UI/UX Designer, UX Researcher</strong></div>
                            </div>
                            <div className="project-intro">
                                <p>
                                YBVR is an early stage VR startup, building the technology to live stream VR videos in 8K.
                                Their white label is a VR video streaming platform, built of modular video components that
                                can accommodate any assortment of VR video content. With rounds of trial and error, the UI
                                is optimized to provide viewers with a smooth, comfortable, and accessible VR experience.
                                </p>
                            </div>
                        </div>
                        <div className="column project-header-images ybvr_white_label">
                            <img className='project-header-image' src={getImageSrc('ybvr_white_label/YBVRexperience.png')} alt="YBVR Experience"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
