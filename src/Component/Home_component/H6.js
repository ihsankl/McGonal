import React, { Component } from 'react'
import img1 from '../../Resource/images/blog/md-blog/1.jpg'
import img2 from '../../Resource/images/blog/md-blog/2.jpg'
import img3 from '../../Resource/images/blog/md-blog/3.jpg'

export default class H6 extends Component {
    render() {
        return (
            <span>
                <section className="fb__blog__ara section-padding--lg bg--white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="section__title service__align--left">
                                    <p>the process of our service </p>
                                    <h2 className="title__line">Latest from Blog</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--40">

                            <div className="col-md-6 col-lg-4 col-sm-12 foo">
                                <div className="blog">
                                    <div className="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src={img1} alt="blog images" />
                                        </a>
                                    </div>
                                    <div className="blog__details">
                                        <h2><a href="blog-details.html">Maxican Food Fev</a></h2>
                                        <span>1st Feb, 2o17</span>
                                        <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
                                        <div className="blog__btn">
                                            <a className="food__btn btn--green theme--hover" href="blog-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-sm-12 foo">
                                <div className="blog">
                                    <div className="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src={img2} alt="blog images" />
                                        </a>
                                    </div>
                                    <div className="blog__details">
                                        <h2><a href="blog-details.html">Italian Pizza Fev</a></h2>
                                        <span>1st jan, 2o17</span>
                                        <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
                                        <div className="blog__btn">
                                            <a className="food__btn btn--green theme--hover" href="blog-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-sm-12 foo">
                                <div className="blog">
                                    <div className="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src={img3} alt="blog images" />
                                        </a>
                                    </div>
                                    <div className="blog__details">
                                        <h2><a href="blog-details.html">Asian Food Fev</a></h2>
                                        <span>1st Dec, 2o17</span>
                                        <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
                                        <div className="blog__btn">
                                            <a className="food__btn btn--green theme--hover" href="blog-details.html">Read More</a>
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
