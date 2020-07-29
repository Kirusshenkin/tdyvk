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
        // {to: '/Login', label: 'Авторизация', exact: true}
      ]
  
    if (this.props.isAuthenticated) {
        links.push({to: '/СharacterCreator', label: 'Создать персонажа', exact: false})
        links.push({to: '/Сharacter', label: 'Персонаж', exact: false})
        // links.push({to: '/Description', label: 'Описание', exact: false})
        // links.push({to: '/Login', label: 'Авторизация', exact: false})
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
                        {this.renderLinks(links)}
                        {/* <Col md={{ span: 4, offset: 4 }}>
                            <NavLink
                                to="/Login"
                                className="header-btn"
                            >Login</NavLink>
                            <NavLink
                                to="/СharacterCreator"
                                className="header-btn"
                            >Создать персонажа</NavLink>
                            <NavLink
                                to="/Сharacter"
                                className="header-btn"
                            >Персонаж
                            </NavLink>
                            <NavLink
                                to="/Description"
                                className="header-btn"
                            >Описание</NavLink>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header