import React, { Component } from 'react'
import {
    Row,
    Col,
    FormGroup,
    Input,
    Button,
    Form,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Label,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap'
import { connect } from 'react-redux'
import { getCategories } from '../redux/action/categories'
import { GoSearch } from 'react-icons/go'
import { getItems, nextItems } from '../redux/action/items'
import { Link } from 'react-router-dom'
// loading starter pack
import { compose } from "redux";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import { withAlert } from 'react-alert'
import NumberFormat from 'react-number-format';
import {APP_URL} from '../redux/config';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false,
            categories: [],
            categorySelected: '',
            name: '',
            rate: '',
            sort: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.getCategories()
        this.getItems()
    }

    getItems = async () => {
        this.setState({ isLoading: true })
        await this.props.dispatch(getItems())
        this.setState({ isLoading: this.props.items.isLoading })
    }

    nextItems = async (nextURL) => {
        this.setState({ isLoading: true })
        await this.props.dispatch(nextItems(nextURL))
        this.setState({ isLoading: false })

    }

    prevItems = async (nextURL) => {
        this.setState({ isLoading: true })
        await this.props.dispatch(nextItems(nextURL))
        this.setState({ isLoading: false })
    }

    jumpTo = async (nextURL, page) => {
        this.setState({ isLoading: true })
        const regex = /page=([\d.]*\d+)/g
        const url = nextURL.match(regex)
        if (!url) {
            console.log(`${nextURL}page=${page}`)
            await this.props.dispatch(nextItems(`${nextURL}page=${page}`))
            this.setState({ isLoading: false })
        } else {
            const newURL = (nextURL.replace(regex, `page=${page}`))
            await this.props.dispatch(nextItems(newURL))
            this.setState({ isLoading: false })
        }

    }


    getCategories = async () => {
        this.setState({ isLoading: true })
        await this.props.dispatch(getCategories())
        this.setState({ isLoading: false })
    }

    search = async () => {
        this.setState({ isLoading: true })
        const { name, rate, categorySelected, sort } = this.state
        let query = `${APP_URL}/items?search[name]=${name}&search[total_ratings]=${rate}&search[category]=${categorySelected}`
        if (this.state.sort !== '') {
            query = `${APP_URL}/items?search[name]=${name}&search[total_ratings]=${rate}&search[category]=${categorySelected}&sort[${sort}]=DESC`
        }
        await this.props.dispatch(nextItems(query))
        this.setState({ isLoading: false })
    }


    render() {
        const { categories } = this.props
        const { name, rate, isLoading } = this.state
        return (
            <span>
                <div className="ht__bradcaump__area bg-image--19">
                    <div className="ht__bradcaump__wrap d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="bradcaump__inner text-center brad__white">
                                        <h2 className="bradcaump-title">menu</h2>
                                        <nav className="bradcaump-inner">
                                            <Link className="breadcrumb-item" to="/">Home</Link>
                                            <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                            <span className="breadcrumb-item active">service</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="food__service bg--white section-padding--lg">
                    <div className="container service__container">

                        {/* THIS IS SEARCH BOX */}
                        <Row className='my-4'>
                            <Col sm={12} md={12} lg={3} >
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input value={name} onChange={(e) => this.setState({ name: e.target.value })} id="name" type="text" placeholder="Search By Name" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col sm={12} md={12} lg={3}>
                                <Form>
                                    <FormGroup>
                                        <Label for="rate">Rate</Label>
                                        <Input value={rate} onChange={(e) => this.setState({ rate: e.target.value })} id="rate" type="text" placeholder="Search By Rate" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col sm={12} md={12} lg={3}>
                                <div className="serch__box">
                                    <Form>
                                        <FormGroup>
                                            <Label for="category">Category</Label>
                                            <Input id="category" type="select" onChange={(e) => this.setState({ categorySelected: e.target.value })}>
                                                <option defaultValue value=''>--Choose Category--</option>
                                                {categories.data.map((v, i) => (
                                                    <option key={i} value={v.id}>{v.name}</option>

                                                ))

                                                }
                                            </Input>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={3}>
                                <div className="serch__box">
                                    <Form>
                                        <FormGroup>
                                            <Label for="sort">Sort By</Label>
                                            <InputGroup>
                                                <Input id="sort" type="select" onChange={(e) => this.setState({ sort: e.target.value })}>
                                                    <option defaultValue value=''>--Sort By--</option>
                                                    <option value='name'>Name</option>
                                                    <option value='total_ratings'>Rating</option>
                                                    <option value='category'>Category</option>
                                                </Input>
                                                <InputGroupAddon addonType="prepend">
                                                    <Button id="btn" onClick={this.search} color='danger' className='btn-block'><GoSearch /> Search</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Col>
                            {/* <Col sm={12} md={12} lg={12 / 5}>
                                <Label for="btn" className="mb-4"></Label>
                                <Button id="btn" onClick={this.search} color='danger' className='btn-block'><GoSearch /> Search</Button>
                            </Col> */}
                        </Row>
                        {/* SEARCH BOX ENDED */}

                        {/* START LOOP HERE */}
                        {!isLoading && this.props.items.data.data ?
                            (this.props.items.data.data.map((v, i) => (
                                <Row>
                                    <Col>
                                        <div className="single__food__list d-flex wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                            <div className="food__list__thumb">
                                                <Link to={`itemdetail/${v.id}`} >
                                                    <img src="img/6609-3-large.jpg" className='img-fluid' alt="list food images" />
                                                </Link>
                                            </div>
                                            <div className="food__list__inner d-flex align-items-center justify-content-between">
                                                <div className="food__list__details">
                                                    <h2><Link to={`itemdetail/${v.id}`}>{`${v.item}`}</Link></h2>
                                                    <p>{v.description}</p>
                                                    <div className="list__btn">
                                                        <Link className="food__btn grey--btn theme--hover" to={`itemdetail/${v.id}`}>Order Now</Link>
                                                    </div>
                                                </div>
                                                <div className="food__rating">
                                                    <div className="list__food__prize">
                                                    <NumberFormat value={v.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <span>{value}</span>} />
                                                        {/* <span>{`${v.price}`}</span> */}
                                                    </div>
                                                    <ul className="rating">
                                                        {
                                                            Array((Math.round(v.total_ratings))).fill(
                                                                <li><i className="zmdi zmdi-star"></i></li>
                                                            )
                                                        }
                                                        {
                                                            Array(5 - (Math.round(v.total_ratings))).fill(
                                                                <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            ))


                            ) : ''

                        }
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="food__pagination d-flex justify-content-center align-items-center mt--130">
                                    {!isLoading && this.props.items.data.info &&
                                        (<li><Link to="#" onClick={() => this.nextItems(this.props.items.data.info.previous)}><i className="zmdi zmdi-chevron-left"></i></Link></li>)
                                    }
                                    {!isLoading && this.props.items.data.info &&
                                        Array(this.props.items.data.info.pages).fill(1).map((v, i) => (<li><Link to="#" onClick={() => this.jumpTo(this.props.items.data.info.current, i + 1)}>{i + 1}</Link></li>))
                                    }
                                    {!isLoading && this.props.items.data.info &&
                                        (<li><Link to="#" onClick={() => this.prevItems(this.props.items.data.info.next)}><i className="zmdi zmdi-chevron-right"></i></Link></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* LOOP ENDS HERE  */}
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
                </section >



            </span >
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        items: state.items
    }
}

// export default connect(mapStateToProps)(Search)
export default compose(connect(mapStateToProps), withAlert())(Search);
