import React from 'react'
// import Header from './containers/Header/Header'
// import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
// import NotFound from './containers/NotFound/NotFound'
import СharacterCreator from './containers/СharacterCreator/СharacterCreator'
// import Сharacter from './containers/Сharacter/Сharacter'
import Сharacter from './containers/Сharacter/Сharacter'
import Description from './containers/Description/Description'
import {connect} from 'react-redux'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import {autoLogin} from './store/actions/auth';
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import Logout from './components/Logout/Logout'

class App extends React.Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
      let routes = (
          <Switch>
            <Route path="/Login" exact component={Auth}/>
            <Route path="/"  component={Main}/>
            {/* <Route path="/Сharacter" component={Сharacter}/> */}
            {/* <Route path="/СharacterCreator" component={СharacterCreator}/> */}
            {/* <Route path="/Description" component={Description}/> */}
            <Redirect to="/" />
          </Switch>
      )
        console.log(this.props)
      if (this.props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/Login" component={Auth}/>
            <Route path="/Сharacter" component={Сharacter}/>
            <Route path="/СharacterCreator" component={СharacterCreator}/>
            <Route path="/Description" component={Description}/>
            <Route path="/logout" component={Logout}/>
            <Redirect to="/" />
          </Switch>
        )
      }
      return (
        <Layout>
          { routes }
        </Layout>
      )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
