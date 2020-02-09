import React, { Component } from 'react'
import img1 from '../../Resource/images/icon/color-icon/1.png'
import img2 from '../../Resource/images/icon/color-icon/2.png'
import img3 from '../../Resource/images/icon/color-icon/3.png'
import img4 from '../../Resource/images/bg/1.jpg'

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
                                                <h2>"MC GONAL"</h2>
                                                <h1>food delivery &amp; service</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="fd__service__area bg-image--2 section-padding--xlg">
                    <div className="container">
                        <div className="service__wrapper bg--white">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <div className="section__title service__align--left">
                                        <h2 className="title__line">How it work</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--30">

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="service">
                                        <div className="service__title">
                                            <div className="ser__icon">
                                                <img src={img1} alt="icon" />
                                            </div>
                                            <h2><a href="service.html">Choose restaurant</a></h2>
                                        </div>
                                        <div className="service__details">
                                            <p>Pick restaurant you love. We provide all the best restaurant you can get around the city.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="service">
                                        <div className="service__title">
                                            <div className="ser__icon">
                                                <img src={img2} alt="icon" />
                                            </div>
                                            <h2><a href="service.html">Select, items </a></h2>
                                        </div>
                                        <div className="service__details">
                                            <p>Picks one of our best menu from any restaurant.</p>
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
