import React, { Component } from 'react';
export default class Footer extends Component {
  state = {
  }

  render () {
      return (
        <div className="footer">
            <div className="inner">
                <h6 className="footer-title">SMILE OFTEN.</h6>
                <div className="link-container">
                    <div className="link-column">
                        <a className="footer-link">ABOUT ME</a>
                    </div>
                    <div className="link-column">
                        <a className="footer-link">MYCITE</a>
                        <a className="footer-link">WHITE LABEL</a>
                        <a className="footer-link">YBVR BRAND</a>
                    </div>
                    <div className="link-column">
                        <a className="footer-link">TRAVERSE</a>
                        <a className="footer-link">AMMA</a>
                        <a className="footer-link">OTHER WORK</a>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}
