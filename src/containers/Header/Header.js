import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
// import Button from '../../components/UI/Button/Button'

const Header = () => {
    return (
            <div className="start">
                <div className="content">
                    <h1>Lorem</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <section className="mini-wrap">
                        <div className="wrap">
                            <div className="btn">
                                <NavLink
                                    to="/Character"
                                    className="btn"
                                >
                                    <div className="btn-character">
                                        Start
                                    </div>
                                </NavLink>
                            </div>
                            <div className="btn">
                                <NavLink
                                    to="/Documentation"
                                    className="btn"
                                >
                                    <div className="btn-character">
                                        Documentation
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}

export default Header