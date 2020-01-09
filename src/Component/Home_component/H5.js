import React, { Component } from 'react'
import img1 from '../../Resource/images/testimonial/clint/1.png'

export default class H5 extends Component {
    render() {
        return (
            <span>
                <section className="fd__testimonial__area section-padding--lg bg-image--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                                <div className="testimonial__activation--1 text-center bg--white owl-carousel owl-theme clearfix">

                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={img1} alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4>Mily Cyrus</h4>
                                            <h6>Food Expert</h6>
                                            <p>Lorem ipsum dolor sit amconsectetuadipisicing elit, kjjnin khk seeiusmod tempor incididunt ut labore et dolore maaliqua. Ut enim ad minim veniam,</p>
                                        </div>
                                    </div>

                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={img1} alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4>Mily Cyrus</h4>
                                            <h6>Food Expert</h6>
                                            <p>Lorem ipsum dolor sit amconsectetuadipisicing elit, kjjnin khk seeiusmod tempor incididunt ut labore et dolore maaliqua. Ut enim ad minim veniam,</p>
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
