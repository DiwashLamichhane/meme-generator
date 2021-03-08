import Sidebar from './Sidebar'
import './style.css'
import Templates from './Templates'
import { Router, Route } from 'react-router-dom'
import Work from './Work'
import history from './history'

import React, { Component } from 'react'

export class App extends Component {

  state = {
    imageDetail : null
  }



  handleImageDetail = (meme)=>{
    this.setState({imageDetail: meme})
  }

  render() {
    return (
      <div className="home">
      <Router history={history}>
      <Route exact path='/' component={()=><Sidebar imageDetail={this.handleImageDetail} />} />
      <Route exact path='/' component={()=><Work memeTemp = {this.state.imageDetail}/>} />
      <Route exact path='/templates' component={()=><Templates imageDetail={this.handleImageDetail}/>} />
      </Router>
    </div>
    )
  }
}

export default App

