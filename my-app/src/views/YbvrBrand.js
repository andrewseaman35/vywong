import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import initLightbox from '../components/Lightbox';

export default class YbvrBrand extends Component {
    state = {}

    componentDidMount() {
        initLightbox('ybvr_brand', 'lightbox')
    }

    render () {
        return (
        <div className='ybvr-brand'>
            <div id='lightbox'></div>
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
            <div className="before-after-container dark-before-after">
                <div className="before">
                    <h2>Light Background</h2>
                    <img src={getImageSrc('ybvr_brand/ybvr_logo_after.png')} alt='YBVR Logo dark on light' />
                </div>
                <div className="after ybvr-dark">
                    <h2>Dark Background</h2>
                    <img src={getImageSrc('ybvr_brand/ybvr_logo.png')} alt='YBVR Logo light on dark' />
                </div>
            </div>
            <div className="content">
                <section>
                    <div className="section-header">
                        <h2>Logo Application</h2>
                    </div>
                    <img src={getImageSrc('ybvr_brand/business_card.png')} alt="Business Card mock"/>
                </section>
                <section>
                    <div className="section-header">
                        <h2>The YBVR Experience</h2>
                    </div>
                    <p>
                        For YBVR's white label demo, we wanted to create a product name different from the brand
                        itself: The YBVR Experience.
                    </p>
                    <img src={getImageSrc('ybvr_brand/ybvr_experience.png')} alt="The YBVR Experience"/>
                </section>
            </div>
        </div>
        )
   }
}
