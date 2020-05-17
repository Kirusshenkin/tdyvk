import React from 'react'
// import Layout from './hoc/Layout/Layout'
import Header from './containers/Header/Header'
// import Scroll from './components/UI/Scroll'
import Documentation from './containers/Documentation/Documentation'
import Character from './containers/Сharacter/Сharacter'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {
    return (
      <BrowserRouter>
          <Header />
          <Route path="/Character" component={Character}/>
          <Route path="/Documentation" component={Documentation}/>
      </BrowserRouter>
    )
}


export default App