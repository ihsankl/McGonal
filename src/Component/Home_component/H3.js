import React, { Component } from 'react'
import img1 from '../../Resource/images/product/sm-img/1.jpg'
import img2 from '../../Resource/images/product/sm-img/2.jpg'
import img3 from '../../Resource/images/product/sm-img/3.jpg'
import img4 from '../../Resource/images/product/sm-img/4.jpg'
import { getItems } from '../../redux/action/items'
import { connect } from 'react-redux'
import { compose } from "redux";
import { withAlert } from 'react-alert'
import { APP_URL } from '../../redux/config';
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'


class H3 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = async () => {
        try {
            await this.props.dispatch(getItems())
        } catch (error) {
            this.props.alert.error('Something went wrong!')
        }
    }


    render() {
        return (
            <span>
                <section className="fd__special__menu__area bg-image--3 section-pt--lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="section__title service__align--left">
                                    <h2 className="title__line">Restaurant with Special Menu</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="special__food__menu mt--80">
                        <div className="food__menu__prl bg-image--4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="food__nav nav nav-tabs" role="tablist">
                                            <a className="active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab">All</a>
                                            <a id="nav-breakfast-tab" data-toggle="tab" href="#nav-breakfast" role="tab">Breakfast</a>
                                            <a id="nav-lunch-tab" data-toggle="tab" href="#nav-lunch" role="tab">Lunch</a>
                                            <a id="nav-dinner-tab" data-toggle="tab" href="#nav-dinner" role="tab">Dinner</a>
                                            <a id="nav-coffee-tab" data-toggle="tab" href="#nav-coffee" role="tab">Coffee</a>
                                            <a id="nav-snacks-tab" data-toggle="tab" href="#nav-snacks" role="tab">Snacks</a>
                                        </div>
                                        <div className="fd__tab__content tab-content" id="nav-tabContent">

                                            <div className="single__tab__panel tab-pane fade show active" id="nav-all" role="tabpanel">
                                                <div className="tab__content__wrap">
                                                    <div className="single__tab__content">
                                                        {/* ITEMS STARTS */}
                                                        {!this.props.items.isLoading &&
                                                            this.props.items.data.data.map((v1, i) => (
                                                                i % 2 === 1 ?
                                                                    <div className="food__menu">
                                                                        <div className="food__menu__thumb">
                                                                            <Link to={`itemdetail/${v1.id}`}>
                                                                                <img src={`${APP_URL}/images/${v1.images}`} alt="product images" />
                                                                            </Link>
                                                                        </div>
                                                                        <div className="food__menu__details">
                                                                            <div className="fd__menu__title__prize">
                                                                                <h4><Link to={`itemdetail/${v1.id}`}>{v1.item}</Link></h4>
                                                                                {/* to={`itemdetail/${v.id}`} */}
                                                                                <span className="menu__prize"><NumberFormat value={v1.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></span>
                                                                            </div>
                                                                            <div className="fd__menu__details">
                                                                                <div className="delivery__time__rating">
                                                                                    <ul className="fd__rating">
                                                                                        {
                                                                                            Array((Math.round(v1.total_ratings))).fill(
                                                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                                            )
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div> : ''
                                                            ))}
                                                        {/* ITEMS ENDS */}
                                                    </div>

                                                    <div className="single__tab__content">
                                                        {/* ITEMS STARTS */}
                                                        {!this.props.items.isLoading &&
                                                            this.props.items.data.data.map((v, i) => (
                                                                i % 2 === 0 ?
                                                                    <div className="food__menu">
                                                                        <div className="food__menu__thumb">
                                                                            <Link to={`itemdetail/${v.id}`}>
                                                                                <img src={`${APP_URL}/images/${v.images}`} height="100px" width="100px" alt="product images" />
                                                                            </Link>
                                                                        </div>
                                                                        <div className="food__menu__details">
                                                                            <div className="fd__menu__title__prize">
                                                                                <h4><Link to={`itemdetail/${v.id}`}>{v.item}</Link></h4>
                                                                                <span className="menu__prize"><NumberFormat value={v.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></span>
                                                                            </div>
                                                                            <div className="fd__menu__details">
                                                                                <div className="delivery__time__rating">
                                                                                    <ul className="fd__rating">
                                                                                        {
                                                                                            Array((Math.round(v.total_ratings))).fill(
                                                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                                            )
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div> : ''
                                                            ))}
                                                        {/* ITEMS ENDS */}
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="single__tab__panel tab-pane fade" id="nav-breakfast" role="tabpanel">
                                                <div className="tab__content__wrap">

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Kabab Ghor</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Haven OF Juice </a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="single__tab__panel tab-pane fade" id="nav-lunch" role="tabpanel">
                                                <div className="tab__content__wrap">

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Kabab Ghor</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Haven OF Juice </a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="single__tab__panel tab-pane fade" id="nav-dinner" role="tabpanel">
                                                <div className="tab__content__wrap">

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Kabab Ghor</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Haven OF Juice </a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$18</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Cheeze Burger</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$20</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Fry</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="single__tab__panel tab-pane fade" id="nav-coffee" role="tabpanel">
                                                <div className="tab__content__wrap">

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Kabab Ghor</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Haven OF Juice </a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="single__tab__panel tab-pane fade" id="nav-snacks" role="tabpanel">
                                                <div className="tab__content__wrap">

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Kabab Ghor</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Haven OF Juice </a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="single__tab__content">

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img1} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$22</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img2} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$14</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Mixed Fruit Juice</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img3} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Italian Chines</a></h4>
                                                                    <span className="menu__prize">$24</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type :Mixed Soup noodles</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="food__menu">
                                                            <div className="food__menu__thumb">
                                                                <a href="menu-details.html">
                                                                    <img src={img4} alt="product images" />
                                                                </a>
                                                            </div>
                                                            <div className="food__menu__details">
                                                                <div className="fd__menu__title__prize">
                                                                    <h4><a href="menu-details.html">Friends & Family Restaurant</a></h4>
                                                                    <span className="menu__prize">$15</span>
                                                                </div>
                                                                <div className="fd__menu__details">
                                                                    <p>Food Type : Chicken Stack</p>
                                                                    <div className="delivery__time__rating">
                                                                        <p>Delivery Time : 60 min, Delivery Cost : Free</p>
                                                                        <ul className="fd__rating">
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                                            <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                        </ul>
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
                            </div>
                        </div>
                    </div>
                </section>

            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
    }
}

// export default connect(mapStateToProps)(H3)
export default compose(connect(mapStateToProps), withAlert())(H3);
