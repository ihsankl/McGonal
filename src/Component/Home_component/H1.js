import React, { Component } from 'react'
import img1 from '../../Resource/images/icon/color-icon/1.png'
import img2 from '../../Resource/images/icon/color-icon/2.png'
import img3 from '../../Resource/images/icon/color-icon/3.png'
import img4 from '../../Resource/images/bg/1.jpg'
import '../../Resource/css/bg.css'

export default class H1 extends Component {
    render() {
        return (
            <span>
                <div className="slider__area slider--one">
                    <div className="slider__activation--1">
                        <div className="slide fullscreen bg-image--1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="slider__content">
                                            <div className="slider__inner">
                                                <h2>“AAHAR”</h2>
                                                <h1>food delivery &amp; service</h1>
                                                <div className="slider__input">
                                                    <input className="res__search" type="text" placeholder="Restaurant" />
                                                    <div className="src__btn">
                                                        <a href="#">Search</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="fd__service__area bg-image--2 section-padding--xlg" style={{ backgroundColor: 'gray' }}>
                    <div className="container">
                        <div className="service__wrapper bg--white">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <div className="section__title service__align--left">
                                        <p>The process of our service</p>
                                        <h2 className="title__line">How it work</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--30">

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="service">
                                        <div className="service__title">
                                            <div className="ser__icon">
                                                <img src={img1} alt="icon" />
                                            </div>
                                            <h2><a href="service.html">Choose restaurant</a></h2>
                                        </div>
                                        <div className="service__details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="service">
                                        <div className="service__title">
                                            <div className="ser__icon">
                                                <img src={img2} alt="icon" />
                                            </div>
                                            <h2><a href="service.html">Select, you love to eat</a></h2>
                                        </div>
                                        <div className="service__details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="service">
                                        <div className="service__title">
                                            <div className="ser__icon">
                                                <img src={img3} alt="icon" />
                                            </div>
                                            <h2><a href="service.html">Pickup or delivery</a></h2>
                                        </div>
                                        <div className="service__details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </span>
        )
    }
}
