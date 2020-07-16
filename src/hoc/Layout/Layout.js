import React, { Component, Fragment } from 'react'
import './Layout.css'
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                    <div className="Layout">
                        <main>
                            {this.props.children}
                        </main>
                    </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Layout