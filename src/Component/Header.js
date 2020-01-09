import React, { Component } from 'react'
import Logo from '../Resource/images/logo/53fdc861-fcb7-4b78-a105-6b328398fd38_200x200.png'
import { Link } from 'react-router-dom'
import { Collapse, Card, CardBody, ListGroup, ListGroupItem, Col, Row, Container } from 'reactstrap'
import '../Resource/css/sidebar.css'
import img1 from '../Resource/images/blog/sm-img/3.jpg'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            width: '0%',
        }

    }

    openNav = () => {
        this.setState({ width: '30%' })
    }

    closeNav = () => {
        this.setState({ width: '0%' })
    }


    render() {
        const { isOpen } = this.state
        return (
            <span>
                <header className="htc__header bg--white">
                    <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src={Logo} alt="logo images" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                                    <div className="main__menu__wrap">
                                        <nav className="main__menu__nav d-none d-lg-block">
                                            <ul className="mainmenu">
                                                <li className="drop"><Link to='/'>Home</Link></li>
                                                <li><a href="about-us.html">About</a></li>
                                                <li className="drop"><Link to='/items'>Menu</Link>
                                                    <ul className="dropdown__menu">
                                                        <li><a href="menu-list.html">Menu List</a></li>
                                                        <li><a href="menu-details.html">Menu Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li className="drop"><a href="blog-mesonry.html">Blog</a>
                                                    <ul className="dropdown__menu">
                                                        <li><a href="blog-mesonry.html">Blog Mesonry</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop"><a href="#">Pages</a>
                                                    <ul className="dropdown__menu">
                                                        <li><a href="service.html">Service</a></li>
                                                        <li><a href="cart.html">Cart Page</a></li>
                                                        <li><a href="checkout.html">Checkout Page</a></li>
                                                        <li><a href="contact.html">Contact Page</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                                    <div className="header__right d-flex justify-content-end">
                                        <div className="log__in">
                                            <a className="accountbox-trigger" href="#"><i className="zmdi zmdi-account-o"></i></a>
                                        </div>

                                        <div className="shopping__cart">
                                            <Link to='#' onClick={this.openNav} className="minicart-trigger" href="#"><i className="zmdi zmdi-shopping-basket"></i></Link>
                                            <div className="shop__qun">
                                                <span>03</span>
                                            </div>
                                        </div>
                                        <div id="myNav" className="overlay" style={{ width: this.state.width }}>
                                            <Link to="#" className="closebtn" onClick={this.closeNav}>&times;</Link>
                                            <div className="overlay-content">
                                                <Container>
                                                    <div className="cartbox__items">

                                                        <div className="cartbox__item">
                                                            <div className="cartbox__item__thumb">
                                                                <a href="product-details.html">
                                                                    <img src={img1} alt="small thumbnail" />
                                                                </a>
                                                            </div>
                                                            <div className="cartbox__item__content">
                                                                <h5><a href="product-details.html" className="product-name">Vanila Muffin</a></h5>
                                                                <p>Qty: <span>01</span></p>
                                                                <span className="price">$15</span>
                                                            </div>
                                                            <button className="cartbox__item__remove">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>

                                                        <div className="cartbox__item">
                                                            <div className="cartbox__item__thumb">
                                                                <a href="product-details.html">
                                                                    <img src={img1} alt="small thumbnail" />
                                                                </a>
                                                            </div>
                                                            <div className="cartbox__item__content">
                                                                <h5><a href="product-details.html" className="product-name">Wheat Bread</a></h5>
                                                                <p>Qty: <span>01</span></p>
                                                                <span className="price">$25</span>
                                                            </div>
                                                            <button className="cartbox__item__remove">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>

                                                        <div className="cartbox__item">
                                                            <div className="cartbox__item__thumb">
                                                                <a href="product-details.html">
                                                                    <img src={img1} alt="small thumbnail" />
                                                                </a>
                                                            </div>
                                                            <div className="cartbox__item__content">
                                                                <h5><a href="product-details.html" className="product-name">Mixed Fruits Pie</a></h5>
                                                                <p>Qty: <span>01</span></p>
                                                                <span className="price">$30</span>
                                                            </div>
                                                            <button className="cartbox__item__remove">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="cartbox__total">
                                                        <ul>
                                                            <li><span className="cartbox__total__title">Subtotal</span><span className="price">$70</span></li>
                                                            <li className="shipping-charge"><span className="cartbox__total__title">Shipping Charge</span><span className="price">$05</span></li>
                                                            <li className="grandtotal">Total<span className="price">$75</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="cartbox__buttons">
                                                        <a className="food__btn" href="cart.html"><span>View cart</span></a>
                                                        <a className="food__btn" href="checkout.html"><span>Checkout</span></a>
                                                    </div>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mobile-menu d-block d-lg-none mean-container">

                                <div className="mean-bar">
                                    <Link to='#' onClick={(e) => this.setState({ isOpen: !this.state.isOpen })} className="meanmenu-reveal" style={{ right: '0px', left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}><span></span><span></span><span></span></Link>

                                </div>
                                <Collapse isOpen={isOpen}>
                                    <ListGroup>
                                        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                                        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                                        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                                        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                </Collapse>


                            </div>

                        </div>
                    </div>
                </header>
            </span>
        )
    }
}
