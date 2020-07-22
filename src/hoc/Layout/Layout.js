import React, { Component } from 'react'
import './Layout.css'
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import { connect } from 'react-redux'

// import { connect } from 'react-redux'


class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header
                    isAuthenticated={this.props.isAuthenticated}
                />
                <div className="Layout">
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)
