import Sidebar from './Sidebar'
import './style.css'
import Templates from './Templates'
import { BrowserRouter, Route } from 'react-router-dom'
import Work from './Work'

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
      <BrowserRouter>
      <Route exact path='/' component={()=><Sidebar imageDetail={this.handleImageDetail} />} />
      <Route exact path='/' component={()=><Work memeTemp = {this.state.imageDetail}/>} />
      <Route exact path='/templates' component={()=><Templates />} />
      </BrowserRouter>
    </div>
    )
  }
}

export default App

