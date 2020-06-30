import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
    return (
        <div className="start">
            <Container>
                <Row>
                    <Col md={4}>
                        <NavLink to="/" className="header-btn"><img src="logo2.png" style={{width: '50px'}} alt="logo"/></NavLink>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        {/* <NavLink
                            to="/Documentation"
                            className="header-btn"
                        >Докуметация</NavLink> */}
                        <NavLink
                            to="/Description"
                            className="header-btn"
                        >Описание</NavLink>
                        <NavLink
                            to="/СharacterCreator"
                            className="header-btn"
                        >Создать персонажа</NavLink>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header