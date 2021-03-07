import { Link } from 'react-router-dom'
import Image from './assests/meme.png'
import Template from './Templates.module.css'
import React, { Component } from 'react'

export class Templates extends Component {
    render() {
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
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
                <div><img  className={Template.memeTemp} src={Image} alt="meme" /></div>             
            </div>
        </div>
            
        )
    }
}

export default Templates

