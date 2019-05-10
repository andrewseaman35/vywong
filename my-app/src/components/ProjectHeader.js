import React, { Component } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import ProjectIntro from '../components/ProjectIntro';

const data = {
    mycite: {
        projectDetails: {
            product: 'Brand Design',
            year: '2017-2018',
            experience: 'Branding',
            platform: 'Digital, Print',
        },
        projectIntro: {
            title: 'Medicine Goes Digital',
            content: 'At Mobiquity, I worked on the MYCITE mobile app and web-based portal. My work on the MYCITE project is under strict NDA.',
        }
    },
    ybvr_white_label: {
        projectDetails: {
            product: 'Virtual Reality',
            year: '2017-2018',
            experience: 'Product Design, UX/UI Design, UX Research',
            platform: 'Android, GearVP',
        },
        projectIntro: {
            title: 'VR Streaming Platform',
            content: 'YBVR, a Silicon Valley based startup, is creating a VR video streaming platform. YBVR\'s white label application allows customers to customize their application with their own branding without having to build one themselves. To showcase YBVR’s white label capabilities, I focused on creating a dynamic home scene that displayed different feature options.',
        },
    },
}

export default class ProjectHeader extends Component {
    state = {}

    render () {
        return (
            <div className="project-header">
                <ProjectDetails {...data[this.props.project].projectDetails} />
                <ProjectIntro {...data[this.props.project].projectIntro} />
            </div>
        )
    }
}
