import React, { Component } from 'react';


export default class Footer extends Component {
  state = {
  }

  render () {
      return (
        <div className="footer">
            <div className="inner">
                <div className="project-link-container">
                    <div className="project-group">
                        <div className="footer-project-link"><a href='/#'>HOME</a></div>
                        <div className="footer-project-link"><a href='/#/mycite'>&nbsp; MYCITE &nbsp;</a></div>
                        <div className="footer-project-link"><a href='/#/ybvr_white_label'>WHITE LABEL</a></div>
                        <div className="footer-project-link"><a href='/#/traverse'>TRAVERSE</a></div>
                        <div className="footer-project-link"><a href='/#/amma'>AMMA</a></div>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}
