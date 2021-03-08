import { Link} from 'react-router-dom'
import Template from './Templates.module.css'
import React, { Component } from 'react'
import history from './history'
import axios from 'axios'

export class Templates extends Component {

    state={
        search : ''
    }


    async componentDidMount(){
        const response = await axios.get('https://api.imgflip.com/get_memes')
        console.log(response.data.data.memes)
        this.setState({results: response.data.data.memes})
        
    }


    render() {
        const memes = this.props.results.map(meme=>{
            return <div key={meme.id}><img onClick={()=>{
                this.props.imageDetail(meme)
                history.push('/');
            }} className={Template.memeTemp} style={{height:'97%'}} src={meme.url} alt={meme.name} /></div>
         })
        return (
            <div className={Template.container}>
        <div className={Template.header}>
            
            <h1> <Link classNames={Template.black} to={"/"}><i className="fas fa-chevron-left"></i></Link> Templates</h1>
            <div>
                <form className={Template.searchBar}>
                    <input className={Template.searchBox} type="text" placeholder="search templates ..." />
                    <button className={Template.search}><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
        <div className={Template.subHeader}>
            <div className={Template.liActive}>Heist</div>
            <div>Internet</div>
        </div>
        
        <div className={Template.templates}>
            {memes}     
            </div>
        </div>
            
        )
    }
}

export default Templates

