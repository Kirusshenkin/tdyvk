import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterStyle = {
    background: '#092437',
    padding: '15px 0px',
}

class Footer extends Component {

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <Col key={index} md={{ span: 1, offset: 1 }}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.clickHandler}
                        className="header-btn"
                    >
                        {link.label}
                    </NavLink>
                </Col>
            )
        })
    }

    render() {
    const links = [
            // ({to: '/Description', label: 'Описание', exact: false})
        ]

    if (this.props.isAuthenticated) {
        links.push({to: '/Description', label: 'Описание', exact: false})
    } else {
        links.push({to: '/Description', label: 'Описание', exact: false})
    }

        return (
            <div style={FooterStyle}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <NavLink to="/" className="footer-btn"><img src="logo2.png" style={{width: '50px'}} alt="logo"/></NavLink>
                        </Col>
                        {this.renderLinks(links)}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer