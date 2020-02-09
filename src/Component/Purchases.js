import React, { Component } from 'react'
import { TabPane, Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, FormText, Form, Input } from 'reactstrap'
import { getCartsHistory } from '../redux/action/carts'
import { postReview } from '../redux/action/reviews'
import decode from 'jwt-decode'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'


class Purchases extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            rating: 1,
            review: '',
            restaurant: '',
            item: ''
        }
    }

    componentDidMount() {
        this.getHistory()
    }

    openModal = (restaurant, item) => {
        this.setState({
            modal: true,
            restaurant,
            item
        })
    }

    closeModal = () => {
        this.setState({
            modal: false,
            rating: 1,
            review: '',
            restaurant: '',
            item: ''
        })

    }

    changeRating = (newRating) => {
        this.setState({ rating: newRating })
    }

    postReview = async () => {
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
        const post = await this.props.dispatch(postReview(data, token))
        if (post) {
            alert('success')
            this.closeModal()
            this.getHistory()
        }

    }

    getHistory = async () => {
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        try {
            await this.props.dispatch(getCartsHistory(decoded.id, token))
            alert('datanya ada')
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        const { modal } = this.state
        return (
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <h4 className='my-3'>{!this.props.cartshistory.isLoading && this.props.cartshistory ? 'Purchases History' : 'NO DATA RETRIEVED'}</h4>
                        <Card>
                            <CardBody>
                                {!this.props.cartshistory.isLoading &&
                                 this.props.cartshistory.data.map((v, i) => (
                                    // LOOP GOES HERE
                                    <Row key={i}>
                                        <Col>
                                            <div className="single__food__list d-flex wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                                <div className="food__list__thumb">
                                                    <Link to="#">
                                                        <img src='img/6609-3-large.jpg' className='img-fluid' alt="list food images" />
                                                    </Link>
                                                </div>
                                                <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                    <div className="food__list__details">
                                                        <h2><Link to="#">{v.item}</Link></h2>
                                                        <p>Restaurant: {v.restaurant}<br />
                                                            QTY: {v.qty}<br />
                                                            Price: {v.price}<br />
                                                            Total: {v.total}

                                                        </p>
                                                        <div className="list__btn">
                                                            <Link onClick={() => { this.openModal(v.restaurant, v.itemID); }} className="food__btn grey--btn theme--hover" to="#">Review</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                ))

                                }
                                {/* {this.props.cartshistory} */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={modal} toggle={this.closeModal} >
                    <ModalHeader toggle={this.closeModal}>Write Review</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col>
                                    Restaurant: {this.state.restaurant} <br />
                                    Item: {this.state.item} <br />
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
                        <Button color="primary" onClick={this.postReview}>Post Review</Button>{' '}
                        <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                    </ModalFooter>
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

export default connect(mapStateToProps)(Purchases)