import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getItems, nextItems } from '../redux/action/items'
import { Link } from 'react-router-dom'

class Items extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading:true
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = async () => {
        await this.props.dispatch(getItems())
        this.setState({isLoading:this.props.items.isLoading})
    }

    nextItems = async (nextURL) => {
        await this.props.dispatch(nextItems(nextURL))

    }

    prevItems = async (nextURL) => {
        await this.props.dispatch(nextItems(nextURL))

    }

    jumpTo = async (nextURL, page) => {
        const regex = /page=([\d.]*\d+)/g
        const url = nextURL.match(regex)
        console.log(url ? true : false)
        console.log(nextURL)
        if (!url) {
            console.log(`${nextURL}page=${page}`)
            await this.props.dispatch(nextItems(`${nextURL}page=${page}`))
        } else {
            const newURL = (nextURL.replace(regex, `page=${page}`))
            console.log(newURL)
            await this.props.dispatch(nextItems(newURL))
        }

    }

    render() {
        const {isLoading} = this.state
        return (
            <span>
                <div className="ht__bradcaump__area bg-image--18">
                    <div className="ht__bradcaump__wrap d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="bradcaump__inner text-center">
                                        <h2 className="bradcaump-title">menu List view</h2>
                                        <nav className="bradcaump-inner">
                                            <a className="breadcrumb-item" href="index.html">Home</a>
                                            <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                            <span className="breadcrumb-item active">menu List view</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="food__menu__grid__area section-padding--lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="food__nav nav nav-tabs" role="tablist">
                                    <a className="active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab">All</a>
                                    <a id="nav-breakfast-tab" data-toggle="tab" href="#nav-breakfast" role="tab">Breakfast</a>
                                    <a id="nav-lunch-tab" data-toggle="tab" href="#nav-lunch" role="tab">Lunch</a>
                                    <a id="nav-dinner-tab" data-toggle="tab" href="#nav-dinner" role="tab">Dinner</a>
                                    <a id="nav-coffee-tab" data-toggle="tab" href="#nav-coffee" role="tab">Coffee</a>
                                    <a id="nav-snacks-tab" data-toggle="tab" href="#nav-snacks" role="tab">Snacks</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
                            <div className="col-lg-12">
                                <div className="fd__tab__content tab-content" id="nav-tabContent">

                                    <div className="food__list__tab__content tab-pane fade show active" id="nav-all" role="tabpanel">
                                        {/* LOOP HERE ITEMS */}

                                        {!this.props.items.isLoading && this.props.items.data.data ?
                                            (this.props.items.data.data.map((v, i) => (
                                                <div key={i} className="single__food__list d-flex wow fadeInUp">
                                                    <div className="food__list__thumb">
                                                        <Link to={`itemdetail/${v.id}`}>
                                                            <img src="img/6609-3-large.jpg" className='img-fluid' alt="list food images" />
                                                        </Link>
                                                    </div>
                                                    <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                        <div className="food__list__details">
                                                            <h2><Link to={`itemdetail/${v.id}`}>{`${v.item}`}</Link></h2>
                                                            <p>{(v.description).substring(0, 200)}</p>
                                                            <div className="list__btn">
                                                                <Link to={`itemdetail/${v.id}`} className="food__btn grey--btn theme--hover" >Order Now</Link>
                                                            </div>
                                                        </div>
                                                        <div className="food__rating">
                                                            <div className="list__food__prize">
                                                                <span>{`${v.price}`}</span>
                                                            </div>

                                                            <ul className="rating">
                                                                {/* HOW TO IMPLEMENT RATING??? */}
                                                                {
                                                                    Array((Math.round(v.total_ratings))).fill(
                                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                                    )
                                                                }
                                                                {
                                                                    Array(5 - (Math.round(v.total_ratings))).fill(
                                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                                    )
                                                                }

                                                                {/* RATING ENDS HERE */}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))


                                            ) : (
                                                <div className="single__food__list d-flex wow fadeInUp">
                                                    <div className="food__list__thumb">
                                                        <a href="menu-details.html">
                                                            <img src="images/menu-list/1.jpg" alt="list food images" />
                                                        </a>
                                                    </div>
                                                    <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                        <div className="food__list__details">
                                                            <h2><a href="menu-details.html">NO DATA GUYS</a></h2>
                                                            <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                            <div className="list__btn">
                                                                <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                            </div>
                                                        </div>
                                                        <div className="food__rating">
                                                            <div className="list__food__prize">
                                                                <span>$30</span>
                                                            </div>
                                                            <ul className="rating">
                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                                <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {/* ENDS HERE ITEMS */}
                                    </div>

                                    <div className="food__list__tab__content tab-pane fade" id="nav-breakfast" role="tabpanel">

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/4.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/5.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Spicy Chily Chicken</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Mixed Fruit Lassi</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Mixed Fruit Lassi</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
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

                                    <div className="food__list__tab__content tab-pane fade" id="nav-lunch" role="tabpanel">

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Mixed Fruit Lassi</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/2.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/3.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
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

                                    <div className="food__list__tab__content tab-pane fade" id="nav-dinner" role="tabpanel">

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/4.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Fruits Desert</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/5.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Vanila Pastry</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Chocolate Pastry</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$50</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Spicy Chily Chicken</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$45</span>
                                                    </div>
                                                    <ul className="rating">
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

                                    <div className="food__list__tab__content tab-pane fade" id="nav-coffee" role="tabpanel">

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Spicy Chily Chicken</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$20</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Mixed Fruit Lassi</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$35</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Spicy Chily Chicken</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
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

                                    <div className="food__list__tab__content tab-pane fade" id="nav-snacks" role="tabpanel">

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Special Chocolety Toast</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$30</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/2.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Spicy Chily Chicken</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$32</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/6.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Mixed Fruit Lassi</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$35</span>
                                                    </div>
                                                    <ul className="rating">
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li><i className="zmdi zmdi-star"></i></li>
                                                        <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__food__list d-flex wow fadeInUp">
                                            <div className="food__list__thumb">
                                                <a href="menu-details.html">
                                                    <img src="images/menu-list/1.jpg" alt="list food images" />
                                                </a>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><a href="menu-details.html">Chocolate Pastry</a></h2>
                                                    <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                                    <div className="list__btn">
                                                        <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                        <span>$40</span>
                                                    </div>
                                                    <ul className="rating">
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
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="food__pagination d-flex justify-content-center align-items-center mt--130">
                                    {!isLoading && this.props.items.data.info.previous &&
                                        (<li><Link to="#" onClick={() => this.nextItems(this.props.items.data.info.previous)}><i className="zmdi zmdi-chevron-left"></i></Link></li>)
                                    }
                                    {!isLoading && this.props.items.data.info.pages &&
                                        Array(this.props.items.data.info.pages).fill(1).map((v, i) => (<li><Link to="#" onClick={() => this.jumpTo(this.props.items.data.info.current, i + 1)}>{i + 1}</Link></li>))
                                    }
                                    {!isLoading && this.props.items.data.info.next &&
                                        (<li><Link to="#" onClick={() => this.prevItems(this.props.items.data.info.next)}><i className="zmdi zmdi-chevron-right"></i></Link></li>)
                                    }
                                </ul>
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
        items: state.items
    }
}

export default connect(mapStateToProps)(Items)
