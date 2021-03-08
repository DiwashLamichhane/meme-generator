import Sidebar from './Sidebar'
import './style.css'
import Templates from './Templates'
import { Router, Route } from 'react-router-dom'
import Work from './Work'
import history from './history'
import axios from 'axios'

import React, { Component } from 'react'

export class App extends Component {

  state = {
    results : [],
    imageDetail : null
  }


  async componentDidMount(){
    const response = await axios.get('https://api.imgflip.com/get_memes')
    console.log(response.data.data.memes)
    this.setState({results: response.data.data.memes})
    
  }

  handleImageDetail = (meme)=>{
    this.setState({imageDetail: meme})
  }

  render() {
    return (
      <div className="home">
      <Router history={history}>
      <Route exact path='/' component={()=><Sidebar results={this.state.results}  
                                                    imageDetail={this.handleImageDetail} />} />
      <Route exact path='/' component={()=><Work memeTemp = {this.state.imageDetail}/>} />
      <Route exact path='/templates' component={()=><Templates results={this.state.results} imageDetail={this.handleImageDetail} />} />
      </Router>
    </div>
    )
  }
}

export default App

