import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailItem } from '../redux/action/items'
import { getReview } from '../redux/action/reviews'
import { putToCarts } from '../redux/action/carts'
import img1 from '../Resource/images/banner/details/1.jpg'
import img2 from '../Resource/images/beef/2.jpg'
import Sidebar from '../Component/Sidebar'
import { getCarts } from '../redux/action/carts'
import {
    Row,
    Col,
    Button,
    Input,
    Form,
    Modal,
    ModalHeader,
    ModalBody
}
    from 'reactstrap'
import decode from 'jwt-decode'
import { Link } from 'react-router-dom'
// loading starter pack
import { compose } from "redux";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'
import NumberFormat from 'react-number-format';
import { APP_URL } from '../redux/config';
import moment from 'moment'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class Itemdetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            showcase: [],
            reviews: [],
            carts: [],
            qty: '',
            isItemLoading: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this.getItems()
        window.scrollTo(0, 0)
    }

    getItems = async () => {
        await this.setState({ isLoading: true })
        const item_id = this.props.match.params.id
        try {
            await this.props.dispatch(getDetailItem(item_id))
            await this.setState({
                items: this.props.detailitem.data.data,
                reviews: this.props.detailitem.data.reviews,
                showcase: this.props.detailitem.data.showcase,
                isItemLoading: this.props.detailitem.isLoading
            })
            await this.setState({ isLoading: false })
        } catch (error) {
            await this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }
    }


    handlePut = async (name, item, price) => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        const regex = /(?<=\s|^)\d+(?=\s|$)/g
        if (!this.state.qty.match(regex)) {
            this.setState({ isLoading: false })
            this.props.alert.error('Number input not valid!')
        } else {
            const data = {
                restaurant: name,
                item: item,
                user: decoded.id,
                qty: this.state.qty,
                price: price,
                total: Number(this.state.qty) * Number(price),
                bought: 'false'
            }

            try {
                await this.props.dispatch(putToCarts(data, token))
                this.setState({ isLoading: false })
                this.props.alert.show('Success!')
                this.getCarts(decoded.id, token)
            } catch (error) {
                this.setState({ isLoading: false })
                this.props.alert.error('Error')
            }
        }
    }

    getCarts = async (user_id, token) => {
        try {
            await this.props.dispatch(getCarts(user_id, token))
            this.setState({ carts: this.props.carts })
        } catch (error) {
            this.props.alert.error('Something went wrong!')
        }
    }

    render() {
        const { items, showcase, reviews, isItemLoading } = this.state
        return (
            <span>
                <div className="ht__bradcaump__area bg-image--18">
                    <div className="ht__bradcaump__wrap d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="bradcaump__inner text-center">
                                        <h2 className="bradcaump-title">Menu Details</h2>
                                        <nav className="bradcaump-inner">
                                            <a className="breadcrumb-item" href="index.html">Home</a>
                                            <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                            <span className="breadcrumb-item active">Menu Details</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOOP HERE */}
                {!isItemLoading && items.length !== 0 ?
                    (items.map((v, i) => (

                        <section className="blog__list__view section-padding--lg menudetails-right-sidebar bg--white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="food__menu__container">
                                            <div className="food__menu__inner d-flex flex-wrap flex-md-nowrap flex-lg-nowrap">
                                                <div className="food__menu__thumb">
                                                    <img src={`${APP_URL}/images/${this.props.detailitem.data.data[0].images}`} className='img-fluid' alt="not found" />
                                                </div>
                                                <div className="food__menu__details">
                                                    <div className="food__menu__content">
                                                        <h2>{v.item}</h2>
                                                        <ul className="food__dtl__prize d-flex">
                                                            <li><NumberFormat value={v.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></li>
                                                        </ul>
                                                        <ul className="rating">
                                                            {
                                                                Array((Math.round(v.total_ratings))).fill(
                                                                    <li ><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                )
                                                            }
                                                        </ul>
                                                        <div className="product-action-wrap">
                                                            <div className="prodict-statas"><span>Category : {v.category}</span></div>
                                                            <div className="product-quantity">
                                                                {this.props.login.token &&
                                                                    <Form onSubmit={(e) => e.preventDefault()} id="myform">
                                                                        <div className="product-quantity">
                                                                            <Row className='my-3'>
                                                                                <Col sm="6" md="6">
                                                                                    <Input bsSize="lg" type='number' value={this.state.qty} onChange={(e) => this.setState({ qty: e.target.value })} min={0} />
                                                                                </Col>
                                                                                <Col sm="6" md="6">
                                                                                    <Button onClick={() => this.handlePut(v.name, v.item, v.price)} className='food__btn btn-block'>Add To Carts</Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                    </Form>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="menu__descrive__area">
                                                <div className="menu__nav nav nav-tabs" role="tablist">
                                                    <a className="active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab">Description</a>
                                                    <a id="nav-breakfast-tab" data-toggle="tab" href="#nav-breakfast" role="tab">Reviews</a>
                                                </div>

                                                <div className="menu__tab__content tab-content" id="nav-tabContent">

                                                    <div className="single__dec__content fade show active" id="nav-all" role="tabpanel">
                                                        <p>{v.description}</p>
                                                    </div>
                                                    {/* REVIEW STARTS HERE */}
                                                    <div className="single__dec__content fade" id="nav-breakfast" role="tabpanel">
                                                        <div className="review__wrapper">
                                                            {!isItemLoading && this.props.detailitem.data.reviews && this.props.detailitem.data.reviews.map((v1, i1) => (
                                                                <div className="single__review d-flex">
                                                                    <div className="review__details">
                                                                        <h3>{v1.username}</h3>
                                                                        <div className="rev__meta d-flex justify-content-between">
                                                                            <span>{moment(v1.updated_on).format('MMMM DD, YYYY')}</span> {/* February  13,  2018 */}
                                                                            <ul className="rating">
                                                                                {
                                                                                    Array((Math.round(v1.ratings))).fill(
                                                                                        <li ><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                        <p>{v1.review}</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* REVIEW ENDS HERE */}

                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="popupal__menu">
                                                    <h4>Related Items</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt--30">

                                            {/* SHOWCASE LOOPS HERE */}
                                            {showcase.map((va, ii) => (

                                                <div key={ii} className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="beef_product">
                                                        <div className="beef__thumb">
                                                            <Link onClick={()=> this.getItems()} to={`/itemdetail/${va.itemID}`}>
                                                                <img src={`${APP_URL}/images/${va.images}`} alt="beef images" />
                                                            </Link>
                                                        </div>
                                                        <div className="beef__hover__info">
                                                            <div className="beef__hover__inner">
                                                                <span>Special</span>
                                                                <span>offer</span>
                                                            </div>
                                                        </div>
                                                        <div className="beef__details">
                                                            <h4><a href="menu-details.html">{va.item}</a></h4>
                                                            <ul className="beef__prize">
                                                                <li><NumberFormat value={va.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></li>
                                                            </ul>
                                                            <p>{(va.description).substring(0, 60)}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))

                                            }
                                            {/* SHOWCASE LOOPS ENDS HERE */}

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 md--mt--40 sm--mt--40">
                                        <Sidebar

                                        />

                                    </div>
                                </div>
                            </div>
                        </section>


                    )))

                    :

                    <section className="blog__list__view section-padding--lg menudetails-right-sidebar bg--white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="food__menu__container">
                                        <div className="food__menu__inner d-flex flex-wrap flex-md-nowrap flex-lg-nowrap">
                                            <div className="food__menu__thumb">
                                                <img src={img1} alt="not found" />
                                            </div>
                                            <div className="food__menu__details">
                                                <div className="food__menu__content">
                                                    <h2>NO DATA!!</h2>
                                                    <ul className="food__dtl__prize d-flex">
                                                        <li className="old__prize">$50</li>
                                                        <li>$40</li>
                                                    </ul>
                                                    <ul className="rating">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp incid dunt ut labo dolore magna aliqua. Ut enim ad minim veniaquis nostrud exercit ullamco laboris nisi ut aliq.</p>
                                                    <div className="product-action-wrap">
                                                        <div className="prodict-statas"><span>Food Type : Taco</span></div>
                                                        <div className="product-quantity">
                                                            <form id='myform' method='POST' action='#'>
                                                                <div className="product-quantity">
                                                                    <div className="cart-plus-minus">
                                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="02" />
                                                                        <div className="add__to__cart__btn">
                                                                            <a className="food__btn" href="cart.html">Add To Cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="menu__descrive__area">
                                            <div className="menu__nav nav nav-tabs" role="tablist">
                                                <a className="active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab">Description</a>
                                                <a id="nav-breakfast-tab" data-toggle="tab" href="#nav-breakfast" role="tab">Reviews</a>
                                            </div>

                                            <div className="menu__tab__content tab-content" id="nav-tabContent">

                                                <div className="single__dec__content fade show active" id="nav-all" role="tabpanel">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui comi modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumfugiat nu pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim  minim veniam, <strong>“quis nostrud exercitation ullamco laboris nisi ut aliqui ”</strong> modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumfugiat nu pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                                                </div>

                                                <div className="single__dec__content fade" id="nav-breakfast" role="tabpanel">
                                                    <div className="review__wrapper">

                                                        <div className="single__review d-flex">
                                                            <div className="review__thumb">
                                                                <img src="images/testimonial/rev/1.jpg" alt="review images" />
                                                            </div>
                                                            <div className="review__details">
                                                                <h3>Robart Hanson</h3>
                                                                <div className="rev__meta d-flex justify-content-between">
                                                                    <span>Admin - February  13,  2018</span>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed tdomino eiusd tempor incididunt ut labore et dolore magna aliqua. Ut e veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiconsequat.</p>
                                                            </div>
                                                        </div>

                                                        <div className="single__review d-flex">
                                                            <div className="review__thumb">
                                                                <img src="images/testimonial/rev/2.jpg" alt="review images" />
                                                            </div>
                                                            <div className="review__details">
                                                                <h3>Robart Hanson</h3>
                                                                <div className="rev__meta d-flex justify-content-between">
                                                                    <span>Admin - February  13,  2018</span>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipis icing eltempor incididunt labore et dolore magna aliqua. Ut enim adm veniam, quis nostrud exercitation.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="popupal__menu">
                                                <h4>Popular Menu</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt--30">

                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="beef_product">
                                                <div className="beef__thumb">
                                                    <a href="menu-details.html">
                                                        <img src="images/beef/1.jpg" alt="beef images" />
                                                    </a>
                                                </div>
                                                <div className="beef__hover__info">
                                                    <div className="beef__hover__inner">
                                                        <span>Special</span>
                                                        <span>offer</span>
                                                    </div>
                                                </div>
                                                <div className="beef__details">
                                                    <h4><a href="menu-details.html">Beef Burger</a></h4>
                                                    <ul className="beef__prize">
                                                        <li className="old__prize">$30</li>
                                                        <li>$30</li>
                                                    </ul>
                                                    <p>erve armesan may be added to the top of apLem ip, consectetur</p>
                                                    <div className="beef__cart__btn">
                                                        <a href="cart.html">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="beef_product">
                                                <div className="beef__thumb">
                                                    <a href="menu-details.html">
                                                        <img src="images/beef/2.jpg" alt="beef images" />
                                                    </a>
                                                </div>
                                                <div className="beef__details">
                                                    <h4><a href="menu-details.html">Beef Burger</a></h4>
                                                    <ul className="beef__prize">
                                                        <li className="old__prize">$30</li>
                                                        <li>$30</li>
                                                    </ul>
                                                    <p>erve armesan may be added to the top of apLem ip, consectetur</p>
                                                    <div className="beef__cart__btn">
                                                        <a href="cart.html">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="beef_product">
                                                <div className="beef__thumb">
                                                    <a href="menu-details.html">
                                                        <img src="images/beef/3.jpg" alt="beef images" />
                                                    </a>
                                                </div>
                                                <div className="beef__hover__info">
                                                    <div className="beef__hover__inner">
                                                        <span>Special</span>
                                                        <span>offer</span>
                                                    </div>
                                                </div>
                                                <div className="beef__details">
                                                    <h4><a href="menu-details.html">Beef Burger</a></h4>
                                                    <ul className="beef__prize">
                                                        <li className="old__prize">$30</li>
                                                        <li>$30</li>
                                                    </ul>
                                                    <p>erve armesan may be added to the top of apLem ip, consectetur</p>
                                                    <div className="beef__cart__btn">
                                                        <a href="cart.html">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 md--mt--40 sm--mt--40">
                                    <div className="food__sidebar">

                                        <div className="food__search">
                                            <h4 className="side__title">Search</h4>
                                            <div className="serch__box">
                                                <input type="text" placeholder="Search keyword" />
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>

                                        <div className="food__recent__post mt--60">
                                            <h4 className="side__title">Recent Posts</h4>
                                            <div className="recent__post__wrap">

                                                <div className="single__recent__post d-flex">
                                                    <div className="recent__post__details">
                                                        <span>February  13,  2018</span>
                                                        <h4><a href="blog-details.html">Diffrent title gose here. This is demo title.</a></h4>
                                                    </div>
                                                </div>


                                                <div className="single__recent__post d-flex">
                                                    <div className="recent__post__details">
                                                        <span>February  13,  2018</span>
                                                        <h4><a href="blog-details.html">Diffrent title gose here. This is demo title.</a></h4>
                                                    </div>
                                                </div>


                                                <div className="single__recent__post d-flex">
                                                    <div className="recent__post__details">
                                                        <span>February  13,  2018</span>
                                                        <h4><a href="blog-details.html">Diffrent title gose here. This is demo title.</a></h4>
                                                    </div>
                                                </div>


                                                <div className="single__recent__post d-flex">
                                                    <div className="recent__post__details">
                                                        <span>February  13,  2018</span>
                                                        <h4><a href="blog-details.html">Diffrent title gose here. This is demo title.</a></h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="food__category__area mt--60">
                                            <h4 className="side__title">Categories</h4>
                                            <ul className="food__category">
                                                <li><a href="#">Maxican Food <span>(20)</span></a></li>
                                                <li><a href="#">Pizza <span>(30)</span></a></li>
                                                <li><a href="#">Food & Beverage <span>(40)</span></a></li>
                                                <li><a href="#">Maxican Food <span>(50)</span></a></li>
                                                <li><a href="#">Asian Twist <span>(60)</span></a></li>
                                                <li><a href="#">Taco Food <span>(20)</span></a></li>
                                            </ul>
                                        </div>

                                        <div className="sidebar__contact mt--60">
                                            <div className="sidebar__thumb">
                                                <img src="images/blog/sidebar/2.jpg" alt="sidebar images" />
                                            </div>
                                            <div className="sidebar__details">
                                                <h4>colorful</h4>
                                                <h2>donut’s</h2>
                                                <span>get it till the stock full</span>
                                            </div>
                                            <div className="sidebar__con__btn">
                                                <a href="#">Contact Now<i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>

                                        <div className="sidebar__newsletter mt--60">
                                            <h4 className="side__title">Newsletter</h4>
                                            <div className="sidebar__inbox">
                                                <input type="text" placeholder="Enter your E-mail" />
                                                <a href="#"><i className="fa fa-paper-plane"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                }
                <Modal isOpen={this.state.isLoading}>
                    <ModalHeader>Loading</ModalHeader>
                    <ModalBody>
                        <div className="sweet-loading text-center">
                            <PulseLoader
                                css={override}
                                size={20}
                                //size={"150px"} this also works
                                color={"#D0021B"}
                                loading={true}
                            />
                        </div>
                    </ModalBody>
                </Modal>

                {/* LOOP ENDS */}
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        detailitem: state.detailitem,
        categories: state.categories,
        login: state.login,
        carts: state.carts,
        reviews: state.reviews,
    }
}

// export default connect(mapStateToProps)(Itemdetail)
export default compose(connect(mapStateToProps), withAlert())(Itemdetail);
