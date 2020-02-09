import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCarts, removeItem } from '../redux/action/carts'
import decode from 'jwt-decode'


class Cartsidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
componentDidMount() {
}


    getCarts = async () => {
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }

        await this.props.dispatch(getCarts(decoded.id, token))
    }

    removeItem = async (id) => {
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        await this.props.dispatch(removeItem(id, token))

        alert('item removed')
        this.getCarts(decoded.id, token)
    }


    render() {
        const { isCart, closeCart } = this.props

        return (
            <div className={`cartbox-wrap ${isCart}`}><div className="body-overlay"></div>
                <div className="cartbox text-right">
                    <button onClick={closeCart} className="cartbox-close"><i className="zmdi zmdi-close"></i></button>
                    <div className="cartbox__inner text-left">
                        <div className="cartbox__items">

                            {/* LOOP STARTS */}

                            {!this.props.carts.isLoading && this.props.carts.data ?
                                (this.props.carts.data.map((v, i) => (
                                    <div key={i} className="cartbox__item">
                                        <div className="cartbox__item__thumb">
                                            <a href="product-details.html">
                                                <img src='img/6609-3-large.jpg' alt="small thumbnail" />
                                            </a>
                                        </div>
                                        <div className="cartbox__item__content">
                                            <h5><a href="product-details.html" className="product-name">{v.item}</a></h5>
                                            <p>Qty: <span>{v.qty}</span></p>
                                            <span className="price">Total: {v.total}</span>
                                        </div>
                                        <button onClick={() => this.removeItem(v.id)} className="cartbox__item__remove">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                )))
                                : ''

                            }

                            {/* LOOP ENDS */}

                        </div>
                        <div className="cartbox__buttons">
                            <Link to='/carts' onClick={closeCart} className="food__btn"><span>View cart</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        carts: state.carts,
        img:state.img
    }
}
export default connect(mapStateToProps)(Cartsidebar)
