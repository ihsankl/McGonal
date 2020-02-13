import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, register } from '../redux/action/login'
import { compose } from "redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class Loginmodal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            is_visible: '',
            username: '',
            password: '',
            RepeatPassword: '',
            modal: false,
            isLoading: false,
        }
    }

    removeStates = () => {
        this.setState({
            username: '',
            password: '',
            RepeatPassword: ''
        })
    }

    postData = async () => {
        this.setState({ isLoading: true })
        try {
            await this.props.dispatch(login({
                username: this.state.username,
                password: this.state.password
            }))
            this.cekAuth()
        } catch (error) {
            this.props.alert.error('Something went wrong!')
            this.setState({ isLoading: false })
        }
    }

    cekAuth = () => {
        if (this.props.login.isSuccess) {
            this.setState({ isLoading: false })
            this.props.alert.show('Login success!')
            this.removeStates()
            this.props.closeLogin()
        } else {
            this.setState({ isLoading: false })
            this.props.alert.error('No user found!');
            this.removeStates()
        }
    }

    handleRegisterInput = async => {
        const { username, password, RepeatPassword } = this.state
        const regex = /^[^\W_]+$/g;
        if (!username.match(regex)) {
            this.props.alert.error("Username is not valid!");
        } else {
            const data = {
                username,
                password
            }
            if (password !== RepeatPassword || password === '') {
                this.props.alert.error('Password not match!');
            } else {
                this.setState({ isLoading: true })
                this.handleRegister(data)
            }
        }
    }

    handleRegister = async (data) => {
        try {
            await this.props.dispatch(register(data));
            if (this.props.register.msg === "Username has taken") {
                this.props.alert.error('Username has taken!');
                this.setState({ isLoading: false })
                this.removeStates()
            } else {
                this.props.alert.show('Register Succeed!');
                this.setState({ isLoading: false })
                this.removeStates()
            }
        } catch (error) {
            this.props.alert.error('Something Went Wrong!');
            this.setState({ isLoading: false })
        }
    }

    openModal = () => {
        this.setState({ modal: true })
    }

    closeModal = () => {
        this.setState({ modal: false })
    }

    render() {
        const { isVisible, closeLogin } = this.props
        const { username, password } = this.state
        return (
            <div className={`accountbox-wrapper ${isVisible}`}><div className="body-overlay"></div>
                <div className="accountbox text-left">
                    <ul className="nav accountbox__filters" id="myTab" role="tablist">
                        <li>
                            <a className="active" id="log-tab" data-toggle="tab" href="#log" role="tab" aria-controls="log" aria-selected="true">Login</a>
                        </li>
                        <li>
                            <a id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" className="">Register</a>
                        </li>
                    </ul>
                    <div className="accountbox__inner tab-content" id="myTabContent">
                        <div className="accountbox__login tab-pane fade active show" id="log" role="tabpanel" aria-labelledby="log-tab">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="single-input">
                                    <input value={username} onChange={(e) => this.setState({ username: e.target.value })} className="cr-round--lg" type="text" placeholder="User name" />
                                </div>
                                <div className="single-input">
                                    <input value={password} onChange={(e) => this.setState({ password: e.target.value })} className="cr-round--lg" type="password" placeholder="Password" />
                                </div>
                                <div className="single-input">
                                    <button onClick={this.postData} type="submit" className="food__btn"><span>Go</span></button>
                                </div>
                                <div className="accountbox-login__others">
                                    <h6>Or login with</h6>
                                    <div className="social-icons">
                                        <ul>
                                            <li className="facebook"><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                                            <li className="twitter"><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                            <li className="pinterest"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="accountbox__register tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <form action="#">
                                <div className="single-input">
                                    <input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} className="cr-round--lg" type="text" placeholder="User name" />
                                </div>
                                <div className="single-input">
                                    <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="cr-round--lg" type="password" placeholder="Password" />
                                </div>
                                <div className="single-input">
                                    <input value={this.state.RepeatPassword} onChange={(e) => this.setState({ RepeatPassword: e.target.value })} className="cr-round--lg" type="password" placeholder="Confirm password" />
                                </div>
                                <div className="single-input">
                                    {/* <button onClick={this.handleRegisterInput} type="submit" className="food__btn"><span>Sign Up</span></button> */}
                                    <Button onClick={this.handleRegisterInput} className="food__btn">Sign Up</Button>
                                </div>
                            </form>
                        </div>
                        <span onClick={() => { closeLogin(); this.removeStates() }} className="accountbox-close-button"><i className="zmdi zmdi-close"></i></span>
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
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        register: state.register
    }
}

// compose(
//     connect(),
//     withAlert(),
//   )(LoginModal)

// export default connect(mapStateToProps)(withAlert()(Loginmodal));
export default compose(connect(mapStateToProps), withAlert())(Loginmodal);