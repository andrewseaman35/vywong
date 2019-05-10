import React, { Component } from 'react';

export default class ProjectDetails extends Component {
    state = {}

    render () {
        return (
            <div className="project-details">
                <div className="detail">Product:{this.props.product}</div>
                <div className="detail">‍Year:{this.props.year}</div>
                <div className="detail">‍Experience:{this.props.experience}</div>
                <div className="detail">‍Platform:{this.props.platform}</div>
            </div>
        )
    }
}
