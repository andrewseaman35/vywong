import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class About extends Component {
    state = {}

    render () {
        return (
            <div>
                <Header />
                <div className='about'>
                    <div className='about-content'>
                        <div className="about-header">
                            <h1 className="header-title">
                                I am Victoria.
                            </h1>
                            <div className="items">
                                <blockquote className="quote">
                                    <strong className="bold-text-2">
                                        San Jose, CA<br/>
                                        User Experience Certification at DesignLab<br/>
                                        B.A. in Digital Design at Seattle University
                                    </strong>
                                </blockquote>
                            </div>
                        </div>
                        <div>
                            <div className="profile">
                                <img src={getImageSrc('about/profile.jpg')} alt="Profile"/>
                                <div className="profile-text">
                                    <p>
                                        As a versatile designer who loves to understand her users, I strive to create meaningful experiences that boost how people work. I value intuitive, impactful designs and aim to build products that solve complex problems and improve the way people interact with the digital world.
                                    </p>
                                    <p>
                                        I adore animals, sunflowers, rummaging through garages sales, and strolling through farmer's markets. I strive to continuously improve myself because life is all about the experiences you make and what you learn along the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
   }
}
