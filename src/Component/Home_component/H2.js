import React, { Component } from 'react'
import img1 from '../../Resource/images/product/md-product/1.jpg'
import img2 from '../../Resource/images/product/md-product/2.jpg'
import img3 from '../../Resource/images/product/md-product/3.jpg'

export default class H2 extends Component {
    render() {
        return (
            <span>
                <section className="food__category__area bg--white section-padding--lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="section__title service__align--left">
                                    <p>the process of our service</p>
                                    <h2 className="title__line">Search by food category</h2>
                                </div>
                            </div>
                        </div>
                        <div className="food__category__wrapper mt--40">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="food__item foo">
                                        <div className="food__thumb">
                                            <a href="menu-details.html">
                                                <img src={img1} alt="product" />
                                            </a>
                                        </div>
                                        <div className="food__title">
                                            <h2><a href="menu-details.html">Breakfast Iteam</a></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="food__item foo">
                                        <div className="food__thumb">
                                            <a href="menu-details.html">
                                                <img src={img2} alt="product images" />
                                            </a>
                                        </div>
                                        <div className="food__title">
                                            <h2><a href="menu-details.html">Lunch Iteam</a></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="food__item foo">
                                        <div className="food__thumb">
                                            <a href="menu-details.html">
                                                <img src={img3} alt="product images" />
                                            </a>
                                        </div>
                                        <div className="food__title">
                                            <h2><a href="menu-details.html">Dinner Iteam</a></h2>
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
