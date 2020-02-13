import React, { Component } from 'react'
import { Row, Col, FormGroup, Label, Input, Button, Form, Container } from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Purchases from '../Component/Purchases';
import Reviews from '../Component/Reviews';



class History extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        this.setState({ activeTab: tab })

    }


    render() {
        const { activeTab } = this.state
        return (
            <Container className='my-5'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            to='#'
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            My Purchases
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to='#'
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            My Reviews
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <Purchases />

                    <Reviews/>
                    
                </TabContent>
            </Container>
        )
    }
}

export default History
