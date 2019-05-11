import React, { Component } from 'react';
import Packaging from '../img/mycite/packaging.png';

export default class MyCite extends Component {
    state = {}

    render () {
        return (
            <div className='mycite-image'>
                <img src={Packaging} alt='MyCite Packaging' />
            </div>
        )
   }
}
