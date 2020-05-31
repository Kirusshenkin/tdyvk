import React from 'react'
// import Layout from './hoc/Layout/Layout'
import Header from './containers/Header/Header'
import Documentation from './containers/Documentation/Documentation'
import СharacterCreator from './containers/СharacterCreator/СharacterCreator'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
      <BrowserRouter>
          <Header />
          <Route path="/СharacterCreator" component={СharacterCreator}/>
          <Route path="/Documentation" component={Documentation}/>
      </BrowserRouter>
    )
}


export default App