import React, { Component } from 'react';
import { getImageSrc } from '../js/util';
import Header from '../components/Header';
import Tile from '../components/Tile';
import Footer from '../components/Footer';

export default class Home extends Component {
    state = {}

    render () {
        return (
            <div>
                <Header />
                <div className="inner">
                    <div className="home-header header-group">
                        <div className='home-hello header-item'>
                            <div className="hello">Hello there, <span className="me">I'm Victoria!</span></div>
                        </div>
                        <div className='home-about header-item'>
                            I’m a Product Designer <br className='tiny-only' />who strives to solve the big problems. <br/>
                            I find happiness in learning, <br className='tiny-only' />eating sushi, and finding great deals.
                        </div>
                    </div>
                    <div className="row-group group-header">
                        <div className='recent-work left'>
                            Recent Work
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className="row-group">
                            <Tile side='left' project='mycite' title='MyCite' subtitle='Mobile and Web App' />
                            <Tile side='right' project='ybvr_white_label' title='YBVR White Label' subtitle='Virtual Reality' />
                        </div>
                        <div className="row-group">
                            <Tile side='left' project='traverse' title='Traverse' subtitle='Mobile iOS' />
                            <Tile side='right' project='amma' title='AMMA' subtitle='Mobile Android' />
                        </div>
                    </div>
                    <div className="home-about-me">
                        <div className="row-group group-header">
                            <div className='recent-work left'>
                                About Me
                            </div>
                        </div>
                        <div className="row-group about-content">
                            <div className="profile-picture left">
                                <img className='profile-img' src={getImageSrc('about/profile.jpg')} alt="Profile"/>
                            </div>
                            <div className="about-text right">
                                <p>
                                    I have always been drawn to art and design.
                                </p>
                                <p>
                                    In high school, I obsessed over mixed media, ceramics, and woodworking.
                                    In college, I studied drawing and painting and then transitioned to
                                    digital design. When I moved to San Jose, I was working as a marketing
                                    and graphic designer where I was exposed to UI/UX design as a field. At
                                    last, I found the career path that clicked.
                                </p>
                                <p>
                                    Whether it was throwing ceramic bowls, creating typographic layouts,
                                    building marketing campaigns, or designing mobile and web apps, I strive
                                    to create delightful experiences for others.
                                </p>
                                <p>
                                    Want to see older visual designs? <a className='highlighted' href='/#/other/'>Click here!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
   }
}
