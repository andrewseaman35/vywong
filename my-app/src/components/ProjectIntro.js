import React, { Component } from 'react';

export default class ProjectIntro extends Component {
    state = {}

    render () {
        return (
            <div className="project-intro">
                <h2 className="title">{this.props.title}</h2>
                <div className="content">{this.props.content}</div>
            </div>
        )
    }
}
