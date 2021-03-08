import { Link } from 'react-router-dom'
import profile from './assests/profile.jfif'
import React, { Component } from 'react'

export class Work extends Component {
    render() {
        const ele = this.props.memeTemp ? (
            <div className="add-shadow">
            <img className="image" src={this.props.memeTemp.url} alt={this.props.memeTemp.name} />
         </div> 
        ) : (
            <React.Fragment>
            <div className="non-responsive" >
                    <p>Choose the template from sidebar</p>
                </div>

            <div className="responsive" >
            <p>Choose the template</p>
            <button className="mar btn-secondary"><Link to={"/templates"}>Choose</Link></button>
            </div>
            </React.Fragment>
        )
        return (
            <div className="work">
            <header className="navbar">
                <div className="profile">
                    <img className="round-img" src={profile} alt="profile" />
                    <div >
                        <h4>Bikash Shrestha</h4>
                        <p>Memer</p>
                    </div>
                </div>

                <div className="buttons">
                    <button className="btn-primary">Upload</button>
                    <Link to={"/templates"}><i className="fas fa-chevron-right" id="right"></i></Link>
                </div>
            </header>

            <div className="generate">
                <div className="items">
                    <div className="editor">
                        <div><i className="fas fa-font"></i></div>
                        <div><i className="fas fa-download"></i></div>
                        <div><i className="fas fa-sliders-h"></i></div>
                    </div>
                    <div className="arrow"><i className="fas fa-chevron-right"></i></div>
                </div>
                
                {ele}
            <div></div>
        </div>
        </div>
        )
    }
}

export default Work
