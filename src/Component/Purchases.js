import React, { Component } from 'react'
import {
    TabPane,
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Container,
    FormText,
    Form,
    Input,
    CardDeck,
    CardTitle,
    CardText
} from 'reactstrap'
import { getCartsHistory } from '../redux/action/carts'
import { postReview, getReview } from '../redux/action/reviews'
import decode from 'jwt-decode'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
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


class Purchases extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            rating: 1,
            review: '',
            restaurant: '',
            item: '',
            itemName: ''
        }
    }

    componentDidMount() {
        this.getHistory()
    }

    openModal = (restaurant, item, itemName) => {
        this.setState({
            modal: true,
            restaurant,
            item,
            itemName
        })
    }

    closeModal = () => {
        this.setState({
            modal: false,
            rating: 1,
            review: '',
            restaurant: '',
            item: '',
            isLoading: false,
        })

    }

    changeRating = (newRating) => {
        this.setState({ rating: newRating })
    }

    postReview = async () => {
        this.setState({ isLoading: true })
        const { review, item, rating } = this.state
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        const data = {
            review,
            user: decoded.id,
            item,
            ratings: rating
        }
        // const post = await this.props.dispatch(postReview(data, token))
        // if (post) {
        //     alert('success')
        // this.closeModal()
        // this.getHistory()
        // }
        try {
            await this.props.dispatch(postReview(data, token))
            await this.props.dispatch(getReview(decoded.id, token))
            this.closeModal()
            this.getHistory()
            this.setState({ isLoading: false })
        } catch (error) {
            this.props.alert.error('Something went wrong!')
            this.setState({ isLoading: false })
        }

    }

    getHistory = async () => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        try {
            await this.props.dispatch(getCartsHistory(decoded.id, token))
            this.setState({ isLoading: false })
        } catch (error) {
            this.props.alert.error('Something went wrong!')
            this.setState({ isLoading: false })
        }
    }


    render() {
        const { modal } = this.state
        return (
            <TabPane tabId="1">
                <h4 className='my-3'>{!this.props.cartshistory.isLoading && this.props.cartshistory.data ? 'Purchases History' : 'No Purchases History'}</h4>
                <CardDeck>
                    {!this.props.cartshistory.isLoading &&
                        this.props.cartshistory.data &&
                        this.props.cartshistory.data.map((v, i) => (
                            // LOOP GOES HERE
                            //--------------------------------------------------------------------------------------------------------
                            <Col key={i} md="6" sm="12" className="mb-4">
                                <Card body style={{ height: '100%', overflow: 'hidden' }}>
                                    <Row>
                                        <Col md="6" sm="12">
                                            {/* <CardTitle>{v.item}</CardTitle> */}
                                            <CardTitle><h2><Link to="#">{v.item}</Link></h2></CardTitle>
                                            <CardText className="mb-3">QTY: {`${v.qty}`}</CardText>
                                            <CardText>Price: <NumberFormat value={v.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></CardText>
                                            <CardText>Total: <NumberFormat value={v.total} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} /></CardText>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <img src={`${APP_URL}/images/${v.images}`} className='img-fluid' alt="list food images" />
                                        </Col>
                                    </Row>
                                    <div className="mt-5" onClick={() => { this.openModal(v.restaurant, v.itemID, v.item); }} class="cartbox__buttons"><Link to="#" class="food__btn"><span>Write Review</span></Link></div>
                                </Card>
                            </Col>
                        ))

                    }
                </CardDeck>
                {/* {this.props.cartshistory} */}
                <Modal isOpen={modal} toggle={this.closeModal} >
                    <ModalHeader toggle={this.closeModal}>Write Review</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col>
                                    Restaurant: {this.state.restaurant} <br />
                                    Item: {this.state.itemName} <br />
                                    <Form onSubmit={(e) => e.preventDefault()}>
                                        <FormText color="muted">
                                            Write your review here.
                                        </FormText>
                                        <Input value={this.state.review} onChange={(e) => this.setState({ review: e.target.value })} type="textarea" name="text" id="exampleText" />
                                    </Form>
                                    <StarRatings
                                        className='text-center'
                                        rating={this.state.rating}
                                        starRatedColor="blue"
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.postReview}>Post Review</Button>{' '}
                        {/* <div onClick={this.postReview} class="cartbox__buttons"><a class="food__btn" href="#"><span>Post Review</span></a></div> */}
                        <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
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
            </TabPane>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        cartshistory: state.cartshistory
    }
}

// export default connect(mapStateToProps)(Purchases)
export default compose(connect(mapStateToProps), withAlert())(Purchases);