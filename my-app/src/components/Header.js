import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/vyw_logo.svg';
export default class Header extends Component {
  state = {
  }

  render () {
      return (
        <div className="header">
            <a href='/'>
               <Logo className="logo" />
            </a>
        </div>
      )
   }
}
