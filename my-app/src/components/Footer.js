import React, { Component } from 'react';
export default class Footer extends Component {
  state = {
  }

  render () {
      return (
        <div className="footer">
            <div className="inner">
                <div className="title">
                    <h6 className="footer-title">smile often.</h6>
                </div>
                <div className="link-container">
                    <div className="link-column">
                        <div><a className="footer-link">about me</a></div>
                    </div>
                    <div className="link-column">
                        <div><a className="footer-link">mycite</a></div>
                        <div><a className="footer-link">white label</a></div>
                        <div><a className="footer-link">ybvr brand</a></div>
                    </div>
                    <div className="link-column">
                        <div><a className="footer-link">traverse</a></div>
                        <div><a className="footer-link">amma</a></div>
                        <div><a className="footer-link">other work</a></div>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}
