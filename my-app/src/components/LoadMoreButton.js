import React, { Component } from 'react';


export default class LoadMoreButton extends Component {
    render () {
        return (
            <div className={`load-more ${this.props.hide ? 'hide' : ''}`}>
                <div className='load-more-container' onClick={this.props.onClick}>
                    <div className="load-more-text">
                        See my process
                    </div>
                    <button className='load-more-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22"><path fill="#9B9B9B" d="M9 17l4.5-4.5 1.57 1.57L8 21.14.93 14.07 2.5 12.5 7 17V0h2v17z"/></svg>
                    </button>
                </div>
            </div>
        )
   }
}
