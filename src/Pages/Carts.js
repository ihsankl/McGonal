import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    getCarts,
    removeItem,
    checkout,
} from '../redux/action/carts'
import {
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";
import decode from 'jwt-decode'
import { Link } from 'react-router-dom'
// loading starter pack
import { compose } from "redux";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'
import NumberFormat from 'react-number-format';
import { APP_URL } from '../redux/config';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



class Carts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carts: [],
            total: '',
            isLoading: false
        }
    }

    componentDidMount() {
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }

        this.getCarts(decoded.id, token)
        window.scrollTo(0, 0)
    }

    getCarts = async (user_id, token) => {
        this.setState({ isLoading: true })
        try {
            await this.props.dispatch(getCarts(user_id, token))
            this.setState({ carts: this.props.carts, isLoading: this.props.carts.isLoading })
            this.counts(this.state.carts)
            this.setState({ isLoading: false })
        } catch (error) {
            this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }

    }

    removeItem = async (id) => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        try {
            await this.props.dispatch(removeItem(id, token))
            this.setState({ isLoading: false })
            this.getCarts(decoded.id, token)
            this.counts(this.props.carts)
            this.props.alert.show('Item removed!')
        } catch (error) {
            this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }
    }

    checkOut = async () => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        const data = {
            bought: 'true'
        }
        if (token) {
            decoded = decode(token)
        }

        try {
            await this.props.dispatch(checkout(decoded.id, data, token))
            this.setState({ isLoading: false })
            this.props.alert.show('Thanks for purchasing!')
            this.getCarts(decoded.id, token)
            this.counts(this.props.carts)
        } catch (error) {
            this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }
    }

    counts = (carts) => {
        if (carts.data) {
            let total = carts.data.reduce((prev, cur) => {
                return Number(prev) + Number(cur.total);
            }, 0);
            this.setState({
                total: total
            })
        } else {
            this.setState({ total: 0 })
        }
    }

    render() {
        const { total, isLoading, carts } = this.state
        return (
            <span>
                <div className="ht__bradcaump__area bg-image--18">
                    <div className="ht__bradcaump__wrap d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="bradcaump__inner text-center">
                                        <h2 className="bradcaump-title">cart page</h2>
                                        <nav className="bradcaump-inner">
                                            <a className="breadcrumb-item" href="index.html">Home</a>
                                            <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                            <span className="breadcrumb-item active">cart page</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cart-main-area section-padding--lg bg--white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 ol-lg-12">
                                <form action="#">
                                    <div className="table-content table-responsive">
                                        <table>
                                            <thead>
                                                <tr className="title-top">
                                                    <th className="product-thumbnail">Image</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* LOOP STARTS */}

                                                {!isLoading && carts.data ?
                                                    (carts.data.map((v, i) => (
                                                        (
                                                            <tr key={i}>
                                                                <td className="product-thumbnail"><a href="#">                                                    <img src={`${APP_URL}/images/${this.props.carts.data[i].images}`} className='img-fluid' alt="not found" />
                                                                </a></td>
                                                                <td className="product-name"><a href="#">{v.item}</a></td>
                                                                <td className="product-price"><span className="amount">
                                                                    <NumberFormat value={v.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></span></td>
                                                                <td className="product-quantity"><input type="number" readOnly value={v.qty} /></td>
                                                                <td className="product-subtotal"><NumberFormat value={v.total} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></td>
                                                                <td className="product-remove"><Link onClick={() => this.removeItem(v.id)} to="#">X</Link></td>
                                                            </tr>
                                                        )
                                                    )))
                                                    :
                                                    (
                                                        <tr>
                                                            <td colSpan="6" className="product-name"><a href="#">Seems like you don't have items in your cart</a></td>
                                                        </tr>
                                                    )

                                                }

                                                {/* LOOP ENDS */}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                                {!isLoading && carts.data &&
                                    <div className="cartbox__btn">
                                        <ul className="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                            <li><Link onClick={this.checkOut} to="#">Check Out</Link></li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="cartbox__total__area">
                                    <div className="cart__total__amount">
                                        <span>Total</span>
                                        <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        carts: state.carts
    }
}
export default compose(connect(mapStateToProps), withAlert())(Carts);
