import React, { Component } from 'react'
import { getCategories } from '../redux/action/categories'
import { connect } from 'react-redux'
// import img from '../Resource/images/blog/instagram/1.jpg'


class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = async () => {
        await this.props.dispatch(getCategories())
        this.setState({ categories: this.props.categories })
    }


    render() {
        const { categories } = this.state
        const { isLoading } = this.props.categories
        return (
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
                        {!isLoading && categories.data ?
                            categories.data.map((v, i) => (
                                <li key={i}><a href="#">{v.name}</a></li>

                            ))
                            :
                            ''

                        }
                    </ul>
                </div>

                <div className="sidebar__newsletter mt--60">
                    <h4 className="side__title">Newsletter</h4>
                    <div className="sidebar__inbox">
                        <input type="text" placeholder="Enter your E-mail" />
                        <a href="#"><i className="fa fa-paper-plane"></i></a>
                    </div>
                </div>

                <div className="sidebar__instagram mt--60">
                    <h4 className="side__title">Instagram</h4>
                    <ul className="instagram__list d-flex flex-wrap">
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/1.jpg')} alt="instagram images" /></a></li>
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/2.jpg')} alt="instagram images" /></a></li>
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/3.jpg')} alt="instagram images" /></a></li>
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/4.jpg')} alt="instagram images" /></a></li>
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/5.jpg')} alt="instagram images" /></a></li>
                        <li><a href="#"><img src={require('../Resource/images/blog/instagram/6.jpg')} alt="instagram images" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(Sidebar)