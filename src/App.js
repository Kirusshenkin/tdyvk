import React from 'react'
// import Header from './containers/Header/Header'
// import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
// import NotFound from './containers/NotFound/NotFound'
import СharacterCreator from './components/ActiveCharacter/СharacterCreator/СharacterCreator'
import Сharacter from './components/FinishedCharacter/Сharacter/Сharacter'
import Description from './containers/Description/Description'
import {connect} from 'react-redux'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import {autoLogin} from './store/actions/auth';
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import Register from './containers/Register/Register'
import Logout from './components/Logout/Logout'

class App extends React.Component {

  componentDidMount() {
    this.props.autoLogin()
  }
  render() {
      let routes = (
          <Switch>
            <Route path="/Login" exact component={Auth}/>
            <Route path="/Register" component={Register}/>
            <Route path="/" component={Main}/>
          </Switch>
      )
      if (this.props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/Login" component={Auth}/>
            <Route path="/Register" component={Register}/>

            <Route path="/Сharacter"  component={Сharacter}/>
            <Route path="/СharacterCreator" component={СharacterCreator}/>
            <Route path="/Description" component={Description}/>
            <Route path="/logout" component={Logout}/>
            <Redirect to="/Login" />
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