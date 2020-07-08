import React from 'react'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
// import NotFound from './containers/NotFound/NotFound'
import СharacterCreator from './containers/СharacterCreator/СharacterCreator'
// import Сharacter from './containers/С  haracter/Сharacter'
import Description from './containers/Description/Description'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
    return (
      <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Main}/>
            {/* <Route path="/Сharacter" component={Сharacter}/> */}
            <Route path="/СharacterCreator" component={СharacterCreator}/>
            <Route path="/Description" component={Description}/>
          </Switch>
          <Footer />
      </Router>
    )
}


export default App