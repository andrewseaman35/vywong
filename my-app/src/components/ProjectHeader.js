import React, { Component } from 'react';
import PAGES from '../js/pages';
import { trackLinkClick } from '../js/tracking';

export default class ProjectHeader extends Component {
    state = {}

    renderProjectLinks() {
        const projectLinks = PAGES[this.props.project].projectLinks;
        if (!projectLinks) {
            return null;
        }
        const links = [];
        projectLinks.links.forEach(function(link, i) {
            links.push(
                <div key={i} className="project-link">
                    <a href={link.href} rel='noopener noreferrer' target='_blank' className='highlighted' onClick={function() { trackLinkClick(link.id) }}>
                        {link.text}
                    </a>
                </div>
            )
        });
        return (
            <div className='link-container'>
                <h3 className="link-header">{projectLinks.header}</h3>
                {links}
            </div>
        )
    }

    render () {
        const projectInfo = PAGES[this.props.project];
        if (!projectInfo) {
            return null;
        }
        const details = projectInfo.projectDetails;
        const intro = projectInfo.projectIntro;

        return (
            <div className="project-header">
                <div className="project-details">
                    <div className="detail">Product: <strong>{details.product}</strong></div>
                    <div className="detail">‍Year: <strong>{details.year}</strong></div>
                    <div className="detail">‍Experience: <strong>{details.experience}</strong></div>
                    <div className="detail">‍Platform: <strong>{details.platform}</strong></div>
                </div>
                <div className="project-intro">
                    <h2 className="title">{intro.title}</h2>
                    <div className="body">{intro.content}</div>
                    {this.renderProjectLinks()}
                </div>
            </div>
        )
    }
}
