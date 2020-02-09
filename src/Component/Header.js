import React, { Component } from 'react'
import Logo from '../Resource/images/logo/53fdc861-fcb7-4b78-a105-6b328398fd38_200x200.png'
import { Link } from 'react-router-dom'
import {
    Collapse, ListGroup, ListGroupItem,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap'
import '../Resource/css/sidebar.css'
import Loginmodal from './Loginmodal'
import Cartsidebar from './Cartsidebar'
import { connect } from 'react-redux'
import { IoIosLogOut } from 'react-icons/io'
import { logOut } from '../redux/action/login'
import decode from 'jwt-decode'
import { getCarts } from '../redux/action/carts'
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'
import { compose } from "redux";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            width: '0%',
            is_visible: '',
            isCart: '',
            carts: [],
            isLoading: false
        }

    }


    openLogin = () => {
        this.setState({ is_visible: 'is-visible' })
    }

    closeLogin = () => {
        this.setState({ is_visible: '' })
    }

    openCart = () => {
        this.setState({ isCart: 'is-visible' })
        this.getCarts()
    }

    getCarts = async () => {
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }

        await this.props.dispatch(getCarts(decoded.id, token))
        this.setState({ carts: this.props.carts, isLoading: this.props.carts.isLoading })
    }

    closeCart = () => {
        this.setState({ isCart: '' })
    }

    logOut = () => {
        this.setState({ isLoading: true })
        const token = this.props.login.token
        this.props.dispatch(logOut(token))
            .then(() => {
                this.setState({ isLoading: false })
                this.props.alert.show('Logged out!')
            })
            .catch((err) => {
                this.setState({ isLoading: false })
                this.props.alert.error(err)
            })

    }


    render() {
        const { isOpen, is_visible, isCart } = this.state
        const { token } = this.props.login
        // const number = carts.data ? <div className="shop__qun">
        //     <span>{carts.data.length}</span>
        // </div> : ''
        return (
            <span>
                <header className="htc__header bg--white">
                    <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={Logo} alt="logo images" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                                    <div className="main__menu__wrap">
                                        <nav className="main__menu__nav d-none d-lg-block">
                                            <ul className="mainmenu">
                                                <li className="drop"><Link to='/'>Home</Link></li>
                                                {/* <li><a href="about-us.html">About</a></li> */}
                                                {token ? <li className="drop"><Link to="/carts">Carts</Link></li> : ''}
                                                {token ? <li className="drop"><Link to="/history">History</Link></li> : ''}
                                                <li className="drop"><Link to="/search">Menu</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                                    <div className="header__right d-flex justify-content-end">
                                        {!token ?
                                            <div className="log__in">
                                                <Link to='#' onClick={this.openLogin} className="accountbox-trigger"><i className="zmdi zmdi-account-o"></i></Link>
                                            </div> :
                                            ''
                                        }

                                        {token ?
                                            <div className="shopping__cart">
                                                <Link to='#' onClick={this.openCart} className="minicart-trigger" href="#"><i className="zmdi zmdi-shopping-basket"></i></Link>
                                                {/* CHECK IF YOU HAVE ITEMS IN CARTS */}
                                                {this.props.carts.data && <div className="shop__qun">
                                                    <span>{this.props.carts.data.length}</span>
                                                </div>}
                                                {/* CHECK IF YOU HAVE ITEMS IN CARTS */}
                                            </div>
                                            : ''
                                        }

                                        {token ?
                                            <div className="shopping__cart">
                                                <Link to='#' onClick={this.logOut} className="minicart-trigger" href="#"><IoIosLogOut size='20px' /></Link>
                                            </div>
                                            : ''

                                        }

                                    </div>
                                </div>
                            </div>

                            <Loginmodal
                                isVisible={is_visible}
                                closeLogin={this.closeLogin}
                            />

                            {token ?
                                <Cartsidebar
                                    isCart={isCart}
                                    closeCart={this.closeCart}
                                /> : ''
                            }

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

export default compose(connect(mapStateToProps), withAlert())(Header);
