import React, { Component } from 'react'
import { TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getReview } from '../redux/action/reviews'
import decode from 'jwt-decode'

class Reviews extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             reviews:[]
        }
    }
    
    componentDidMount() {
        this.getReviews()
    }

    getReviews = async () => {
        const {token} = this.props.login
        let decoded = ''
        if (token) {
            decoded = decode(token)
        }
        await this.props.dispatch(getReview(decoded.id, token))
        console.log(this.props.reviews)
    }


    render() {
        return (
            <TabPane tabId="2">
                <h4 className='my-3'>{!this.props.reviews.isLoading && this.props.reviews ? 'My Reviews' : 'NO DATA RETRIEVED'}</h4>
                <Row>
                    {!this.props.reviews.isLoading && this.props.reviews.data ?
                        (this.props.reviews.data.map((v, i) => (
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>{v.name}</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        ))) :
                        <Col sm="12">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    }
                </Row>
            </TabPane>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Reviews)