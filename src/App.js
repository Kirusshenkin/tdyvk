import React from 'react'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Documentation from './containers/Documentation/Documentation'
import СharacterCreator from './containers/СharacterCreator/СharacterCreator'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
      <BrowserRouter>
          <Header />
          <Route path="/" exact component={Main}/>
          <Route path="/СharacterCreator" component={СharacterCreator}/>
          <Route path="/Documentation" component={Documentation}/>
      </BrowserRouter>
    )
}


export default App