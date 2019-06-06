import React, { Component } from 'react';

const FOOTER_LINKS = [
    [
        {text: 'mycite', href: '/#/mycite'},
        {text: 'white label', href: '/#/ybvr_white_label'},
        {text: 'ybvr brand', href: '/#/ybvr_brand'},
    ], [
        {text: 'traverse',  href: '/#/traverse'},
        {text: 'amma', href: '/#/amma'},
        {text: 'other work', href: '/#/other'},
    ],
];

export default class Footer extends Component {
  state = {
  }

  renderLinks(links) {
    const linkElements = [];
    links.forEach(function(link, i) {
        linkElements.push(
            <div key={i}><a className="footer-link" href={link.href}>{link.text}</a></div>
        );
    });
    return linkElements;
  }

  renderLinkColumns() {
    const linkColumns = [];
    FOOTER_LINKS.forEach((function(linkColumn, i) {
        linkColumns.push(
            <div className="link-column" key={i}>
                {this.renderLinks(linkColumn)}
            </div>
        );
    }).bind(this));
    return (
        <div className="link-container">
            {linkColumns}
        </div>
    )
  }

  render () {
      return (
        <div className="footer">
            <div className="inner">
                <div className="title">
                    <h4 className="footer-title">smile often.</h4>
                </div>
                <div className="link-container">
                    {this.renderLinkColumns()}
                </div>
            </div>
        </div>
      )
   }
}
