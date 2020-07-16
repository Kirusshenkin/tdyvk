import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterStyle = {
    background: '#092437',
    padding: '15px 0px',
}

const Footer = () => {
    return (
        <div style={FooterStyle}>
            <Container>
                <Row>
                    <Col md={4}>
                        <NavLink to="#" className="footer-btn"><img src="logo2.png" style={{width: '50px'}} alt="logo"/></NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer