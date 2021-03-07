import React from 'react'
import { Link } from 'react-router-dom'
import profile from './assests/profile.jfif'

function Work() {
    return (
        <div className="work">
            <header class="navbar">
                <div class="profile">
                    <img class="round-img" src={profile} alt="profile" />
                    <div >
                        <h4>Bikash Shrestha</h4>
                        <p>Memer</p>
                    </div>
                </div>

                <div class="buttons">
                    <button class="btn-primary">Upload</button>
                    <Link to={"/templates"}><i class="fas fa-chevron-right" id="right"></i></Link>
                </div>
            </header>

            <div class="generate">
                <div class="items">
                    <div class="editor">
                        <div><i class="fas fa-font"></i></div>
                        <div><i class="fas fa-download"></i></div>
                        <div><i class="fas fa-sliders-h"></i></div>
                    </div>
                    <div class="arrow"><i class="fas fa-chevron-right"></i></div>
                </div>
                <div class="non-responsive" >
                    <p>Choose the template from sidebar</p>
                </div>
                <div class="responsive" >
                    <p>Choose the template</p>
                    <button class="mar btn-secondary"><Link to={"/templates"}>Choose</Link></button>
                </div>
                {/* <!-- <div class="add-shadow">
                   <img class="image" src="./assets/1.png" alt="">
                    
                </div> --> */}
            <div></div>
        </div>
        </div>
    )
}

export default Work
