import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
export default class Header extends Component {
  state = {
  }

  render () {
      return (
        <div className="header">
            <a href='/'>
               <img className='logo' src={getImageSrc('vyw_logo.svg')} alt="Logo"/>
            </a>
        </div>
      )
   }
}
