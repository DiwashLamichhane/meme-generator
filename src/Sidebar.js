import React, { Fragment } from 'react'
import Image from './assests/meme.png'

function Sidebar() {
    return (
       <Fragment>
           <div class="sidebar">
                <h1>Templates</h1>
                <div class="search-bar">
                    <form>
                        <input class="search-box" type="text" placeholder="search templates ..." />
                        <button class="search"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                 <div class="sub-header">
                <ul>
                    <div class="li-active">Heist</div>
                    <div><li>Internet</li></div>                  
                </ul>
            </div>

            <div class="templates">
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                <div><img  class="meme-temp" src={Image} alt="meme" /></div>             
                    
            </div>
           </div>
       </Fragment>
    )
}

export default Sidebar
