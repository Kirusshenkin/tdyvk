import React, {Component} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HeadStyle = {
    background: '#092437',
    padding: '15px 0px',
}

class Header extends Component {

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <NavLink
                    key={index}
                    to={link.to}
                    exact={link.exact}
                    onClick={this.clickHandler}
                    className="header-btn"
                >
                    {link.label}
                </NavLink>
            )
        })
    }

    render() {
    const links = [];
        // {to: '/Login', label: 'Авторизация', exact: true}

  
    if (this.props.isAuthenticated) {
        links.push({to: '/СharacterCreator', label: 'Создать персонажа', exact: false})
        links.push({to: '/Сharacter', label: 'Персонаж', exact: false})
        links.push({to: '/logout', label: 'Выйти', exact: false})

    } else {
        links.push({to: '/Login', label: 'Авторизация', exact: false})
    }
        return (
            <div style={HeadStyle}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <NavLink to="/" className="header-btn"><img src="logo2.png" style={{width: '50px'}} alt="logo"/></NavLink>
                        </Col>
                        <Col md={{ span: 8}}>
                            {this.renderLinks(links)}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header