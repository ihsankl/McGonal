import React, { Component } from 'react'
import img1 from '../Resource/images/gallery/sm-img/1.jpg'
import img2 from '../Resource/images/gallery/sm-img/2.jpg'
import img3 from '../Resource/images/gallery/sm-img/3.jpg'
import img4 from '../Resource/images/gallery/sm-img/4.jpg'
import img5 from '../Resource/images/gallery/sm-img/5.jpg'
import img6 from '../Resource/images/gallery/sm-img/6.jpg'
import img7 from '../Resource/images/blog/sm-img/1.jpg'
import img8 from '../Resource/images/blog/sm-img/2.jpg'
import img9 from '../Resource/images/blog/sm-img/3.jpg'
import img10 from '../Resource/images/icon/shape/2.png'

export default class Footer extends Component {
    render() {
        return (
            <span>
                <footer className="footer__area footer--1">
            <div className="footer__wrapper bg__cat--1 section-padding--lg">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="footer">
                                <h2 className="ftr__title">About Aahar</h2>
                                <div className="footer__inner">
                                    <div className="ftr__details">
                                        <p>Lorem ipsum dolor sit amconsectetur adipisicing elit,</p>
                                        <div className="ftr__address__inner">
                                            <div className="ftr__address">
                                                <div className="ftr__address__icon">
                                                    <i className="zmdi zmdi-home"></i>
                                                </div>
                                                <div className="frt__address__details">
                                                    <p>Elizabeth Tower. 6th Floor Medtown, New York</p>
                                                </div>
                                            </div>
                                            <div className="ftr__address">
                                                <div className="ftr__address__icon">
                                                    <i className="zmdi zmdi-phone"></i>
                                                </div>
                                                <div className="frt__address__details">
                                                    <p><a href="#">+088 01673-453290</a></p>
                                                    <p><a href="#">+088 01773-458290</a></p>
                                                </div>
                                            </div>
                                            <div className="ftr__address">
                                                <div className="ftr__address__icon">
                                                    <i className="zmdi zmdi-email"></i>
                                                </div>
                                                <div className="frt__address__details">
                                                    <p><a href="#">Aahardelivery@email.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="social__icon">
                                            <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-google"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="col-md-6 col-lg-3 col-sm-12 sm--mt--40">
                            <div className="footer gallery">
                                <h2 className="ftr__title">Our Gallery</h2>
                                <div className="footer__inner">
                                    <ul className="sm__gallery__list">
                                        <li><a href="#"><img src={img1} alt="gallery images"/></a></li>
                                        <li><a href="#"><img src={img2} alt="gallery images"/></a></li>
                                        <li><a href="#"><img src={img3} alt="gallery images"/></a></li>
                                        <li><a href="#"><img src={img4} alt="gallery images"/></a></li>
                                        <li><a href="#"><img src={img5} alt="gallery images"/></a></li>
                                        <li><a href="#"><img src={img6} alt="gallery images"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-6 col-lg-3 col-sm-12 md--mt--40 sm--mt--40">
                            <div className="footer">
                                <h2 className="ftr__title">Opening Time</h2>
                                <div className="footer__inner">
                                    <ul className="opening__time__list">
                                        <li>Saturday<span>.......</span>9am to 11pm</li>
                                        <li>Sunday<span>.......</span>9am to 11pm</li>
                                        <li>Monday<span>.......</span>9am to 11pm</li>
                                        <li>Tuesday<span>.......</span>9am to 11pm</li>
                                        <li>Wednesday<span>.......</span>9am to 11pm</li>
                                        <li>Thursday<span>.......</span>9am to 11pm</li>
                                        <li>Friday<span>.......</span>9am to 11pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-6 col-lg-3 col-sm-12 md--mt--40 sm--mt--40">
                            <div className="footer">
                                <h2 className="ftr__title">Latest Post</h2>
                                <div className="footer__inner">
                                    <div className="lst__post__list">
                                        <div className="single__sm__post">
                                            <div className="sin__post__thumb">
                                                <a href="blog-details,html">
                                                    <img src={img7} alt="blog images"/>
                                                </a>
                                            </div>
                                            <div className="sin__post__details">
                                                <h6><a href="blog-details.html">Chicken Shawarma </a></h6>
                                                <p>Lordo loram consecte turadip isicing</p>
                                            </div>
                                        </div>
                                        <div className="single__sm__post">
                                            <div className="sin__post__thumb">
                                                <a href="blog-details,html">
                                                    <img src={img8} alt="blog images"/>
                                                </a>
                                            </div>
                                            <div className="sin__post__details">
                                                <h6><a href="blog-details.html">Fruits Desert</a></h6>
                                                <p>Lordo loramcon secte turadipi sicing</p>
                                            </div>
                                        </div>
                                        <div className="single__sm__post">
                                            <div className="sin__post__thumb">
                                                <a href="blog-details,html">
                                                    <img src={img9} alt="blog images"/>
                                                </a>
                                            </div>
                                            <div className="sin__post__details">
                                                <h6><a href="blog-details.html">Vanilla Pastry</a></h6>
                                                <p>Lordo loramcon secte turadip isicing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="copyright bg--theme">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="copyright__inner">
                                <div className="cpy__right--left">
                                    <p>@All Right Reserved.<a href="https://freethemescloud.com/">Free themes Cloud</a></p>
                                </div>
                                <div className="cpy__right--right">
                                    <a href="#">
                                        <img src={img10} alt="payment images"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            </span>
        )
    }
}
