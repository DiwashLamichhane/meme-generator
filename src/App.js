import React from 'react'
import Sidebar from './Sidebar'
import './style.css'
import Templates from './Templates'
import { BrowserRouter, Route } from 'react-router-dom'
import Work from './Work'

function App() {
  return (
    <div class="home">
      <BrowserRouter>
      <Route exact path='/' component={Sidebar} />
      <Route exact path='/' component={Work} />
      <Route exact path='/templates' component={Templates} />
      </BrowserRouter>
    </div>
  );
}

export default App;
