import React, { Component } from 'react';
import { getImageSrc } from '../js/util';


export default class MyCite extends Component {

    render () {
        return (
        <div className='mycite'>
            <div className="inner">
                <section className="dual-text">
                    <div className="column first">
                        <p>
                            At Mobiquity, I worked on the MYCITE system to build a native iOS and Android
                            app and web-based portal. As a FDA-regulated product, the MYCITE product depends
                            on human factor studies and development of new features that focus on a user’s
                            comprehension of tasks in order to optimize the efficiency, safety, and ease
                            of learning for its targeted users.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            As the lead designer on the project, I guided the development of app designs
                            and documentation for the product's FDA submission as well as built mockups and
                            prototypes for user testing. Working under a heavily-regulated medical product,
                            design concepts were focused on providing clear and easy to understand information
                            through straightforward directions and guidance.
                        </p>
                    </div>
                </section>
                <section className="full-image">
                    <img src={getImageSrc('mycite/mycite_packaging.png')} alt="Mycite Packaging"/>
                </section>
            </div>
        </div>
        )
   }
}
