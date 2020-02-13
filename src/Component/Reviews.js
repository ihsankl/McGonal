import React, { Component } from 'react'
import {
    TabPane,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    CardDeck,
    Container,
    Form,
    FormText,
    Input,
    ModalFooter
} from 'reactstrap'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { getReview, getDetailReview, deleteReview, editReview } from '../redux/action/reviews'
import decode from 'jwt-decode'
import { MdDelete, MdEdit } from "react-icons/md";
// loading starter pack
import { compose } from "redux";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'
import moment from "moment";
import { APP_URL } from '../redux/config';
import { Link } from 'react-router-dom'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            isLoading: true,
            modal: false,
            rating: 1,
            review: '',
            itemID: '',
        }
    }

    componentDidMount() {
        this.getReviews()
    }

    changeRating = (newRating) => {
        this.setState({ rating: newRating })
    }

    getReviews = async () => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        try {
            await this.props.dispatch(getReview(decoded.id, token))
            this.setState({ isLoading: false })
        } catch (error) {
            this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }
    }

    deleteReview = async () => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        try {
            await this.props.dispatch(deleteReview(this.props.detailreview.data[0].id, token))
            await this.props.dispatch(getReview(decoded.id, token))
            this.setState({ isLoading: false, modal: false })
            this.props.alert.show('Review deleted!')
        } catch (error) {
            this.setState({ isLoading: false })
            this.props.alert.error('Something went wrong!')
        }
    }

    editReview = async () => {
        this.setState({ isLoading: true })
        const { review, itemID, rating } = this.state
        const { token } = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        const data = {
            review,
            item: itemID,
            ratings: rating
        }
        // const post = await this.props.dispatch(postReview(data, token))
        // if (post) {
        //     alert('success')
        // this.closeModal()
        // this.getHistory()
        // }
        try {
            await this.props.dispatch(editReview(this.props.detailreview.data[0].id, data, token))
            await this.props.dispatch(getReview(decoded.id, token))
            this.closeModal()
            this.setState({ isLoading: false })
            this.props.alert.show('Review edited!')
        } catch (error) {
            this.props.alert.error('Something went wrong!')
            this.setState({ isLoading: false })
        }

    }

    openModal = async (reviewID) => {
        this.setState({ isLoading: true })
        const { token } = this.props.login
        // let decoded = ''
        // if (token) {
        //     decoded = decode(token)
        // }
        try {
            await this.props.dispatch(getDetailReview(reviewID, token))
            this.setState({
                isLoading: false,
                modal: true,
                rating: this.props.detailreview.data[0].ratings,
                review: this.props.detailreview.data[0].review,
                itemID: this.props.detailreview.data[0].itemID,
            })
        } catch (error) {
            this.setState({ isLoading: false })
        }
    }

    closeModal = () => {
        this.setState({
            modal: false,
            review: '',
            item: '',
            rating: 1
        })
    }

    render() {
        const { modal } = this.state
        return (
            <TabPane tabId="2">
                <h4 className='my-3'>{!this.props.reviews.isLoading && this.props.reviews ? 'My Reviews' : 'NO DATA RETRIEVED'}</h4>
                <Row>
                    <CardDeck>
                        {!this.props.reviews.isLoading && this.props.reviews.data &&
                            (this.props.reviews.data.map((v, i) => (
                                <Col key={i} md="6" sm="12" className="mb-4">
                                    <Card body style={{ height: '100%', overflow: 'hidden' }}>
                                        <Row>
                                            <Col md="6" sm="12">
                                                <CardTitle><h2><Link to="#">{v.name}</Link></h2></CardTitle>
                                                <CardText className="mb-3">{`"${v.review}"`}</CardText>
                                                <CardText>{`Updated on: ${moment(v.updated).format('YYYY-MM-DD')}`}</CardText>
                                            </Col>
                                            <Col md="6" sm="12">
                                                <img src={`${APP_URL}/images/${v.images}`} className='img-fluid' alt="list food images" />
                                            </Col>
                                        </Row>
                                        <div className="mt-5" onClick={() => this.openModal(v.id)} class="cartbox__buttons"><Link class="food__btn" to="#"><span>View Review</span></Link></div>
                                    </Card>
                                </Col>
                            )))
                        }
                    </CardDeck>
                </Row>
                <Modal isOpen={modal} >
                    <ModalHeader>My Review</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                {!this.props.detailreview.isLoading && this.props.detailreview.data.length !== 0 &&
                                    <Col>
                                        <Row>
                                            <Col sm="12">
                                                <img src={`${APP_URL}/images/${this.props.detailreview.data[0].images}`} className='img-fluid' alt="list food images" />
                                            </Col>
                                            <Col sm="12">
                                                Item: {this.props.detailreview.data[0].name} <br />
                                            </Col>
                                        </Row>
                                        <Form onSubmit={(e) => e.preventDefault()}>
                                            <FormText color="muted">
                                                Write your review here.
                                        </FormText>
                                            <Input value={this.state.review} onChange={(e) => this.setState({ review: e.target.value })} type="textarea" name="text" id="exampleText" />
                                        </Form>
                                        <StarRatings
                                            className='text-center'
                                            rating={this.state.rating}
                                            starRatedColor="red"
                                            changeRating={this.changeRating}
                                            numberOfStars={5}
                                            name='rating'
                                        />
                                    </Col>
                                }
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.editReview}><MdEdit /> Edit Review</Button>
                        <Button color="danger" onClick={this.deleteReview}><MdDelete /> Delete Review</Button>
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
        reviews: state.reviews,
        detailreview: state.detailreview,
    }
}

// export default connect(mapStateToProps)(Reviews)
export default compose(connect(mapStateToProps), withAlert())(Reviews);