import React, { Component } from 'react'
import TabContainer from 'react-bootstrap/TabContainer'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
// import TabContent from 'react-bootstrap/TabContent'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Tab from 'react-bootstrap/Tab'

import './Сharacter.css'

class Сharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: [],
            loading: true
        }
    }
    render() {
        return (
            <div className="Сharacter">
                <Container>
                    <h3>Кека</h3>
                    <TabContainer id="list-group-tabs-example">
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href="#link1">
                                        Суприм
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Мудлан
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Сутлан
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Мунжак
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Ебарик
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                        API Капитана пидораса
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </TabContainer>
                </Container>
            </div>
        )
    }
}

export default Сharacter