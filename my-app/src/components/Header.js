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
            <div className="inner-link-container">
               <a href='https://www.linkedin.com/in/victoriaywong/' rel='noopener noreferrer' target='_blank'>
                  <div className='icon-button'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
                     </svg>
                  </div>
               </a>
               <a href='mailto:vic.y.wong@gmail.com' rel='noopener noreferrer'>
                  <div className='icon-button email'>
                     <svg viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="#9b9b9b" stroke-width="1.5" transform="translate(1 1)"><rect height="12" rx="2" width="16"/><path d="m16 1c-5.2 3.7-8 5.5-8.3 5.5s-2.9-1.8-7.7-5.5"/></g>
                     </svg>
                  </div>
               </a>
            </div>
        </div>
        
      )
   }
}
