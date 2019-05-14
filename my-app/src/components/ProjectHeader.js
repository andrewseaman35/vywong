import React, { Component } from 'react';
import ReactGA from 'react-ga';
import PAGES from '../js/pages';

ReactGA.initialize('UA-130632736-4');

export default class ProjectHeader extends Component {
    state = {}

    onProjectLinkClicked(linkText) {
        const linkId = `${this.props.project}:${linkText}`;
        ReactGA.event({
            category: 'projectLink',
            action: 'click',
            label: linkId,
        });
    }

    renderProjectLinks() {
        const projectLinks = PAGES[this.props.project].projectLinks;
        if (!projectLinks) {
            return null;
        }
        const links = [];
        projectLinks.links.forEach((function(link, i) {
            links.push(
                <div key={i} className="project-link">
                    <a href={link.href} rel='noopener noreferrer' target='_blank' onClick={this.onProjectLinkClicked.bind(this, link.id)}>
                        {link.text}
                    </a>
                </div>
            )
        }).bind(this));
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
