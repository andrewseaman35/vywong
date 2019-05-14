import React, { Component } from 'react';
import { getImageSrc } from '../js/util';

export default class Other extends Component {
    state = {}

    render () {
        return (
        <div className='ybvr-brand'>
            <div className="before-after-container">
                <div className="before">
                    <h2>Before</h2>
                    <img src={getImageSrc('ybvr_brand/ybvr_logo_before.png')} alt='YBVR Logo before' />
                </div>
                <div className="after">
                    <h2>After</h2>
                    <img src={getImageSrc('ybvr_brand/ybvr_logo_after.png')} alt='YBVR Logo after' />
                </div>
            </div>
            <div className="content">
                <section>
                    <div className="section-header">
                        <h2>Color</h2>
                    </div>
                    <img src={getImageSrc('ybvr_brand/colors_tmp.png')} alt="Colors"/>
                    <p>
                        YBVR's original colors differed significantly between print, web, and in VR so I needed to find
                        colors that would work on all mediums. For that reason, I decided that the logo's green would
                        differ on light and dark backgrounds. This decision then defined the application of color to
                        the logo and optimized the visibility and contrast of the letters against varying backgrounds.
                    </p>
                </section>
            </div>
        </div>
        )
   }
}
