import React, { Component } from 'react';
import { getImageSrc } from '../js/util';

export default class MyCite extends Component {
    state = {}

    render () {
        return (
            <div className='mycite-image'>
                <img src={getImageSrc('mycite/packaging.png')} alt='MyCite Packaging' />
            </div>
        )
   }
}
