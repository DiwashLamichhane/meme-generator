import React, { PureComponent  } from 'react'
import axios from 'axios'

export class Sidebar extends PureComponent  {

    state={
        results : [],
        search : ''
    }


    async componentDidMount(){
        const response = await axios.get('https://api.imgflip.com/get_memes')
        console.log(response.data.data.memes)
        this.setState({results: response.data.data.memes})
        
    }


    render() {
        const memes = this.state.results.map(meme=>{
           return <div key={meme.id}><img onClick={()=>this.props.imageDetail(meme)} className="meme-temp" style={{height:'97%'}} src={meme.url} alt={meme.name} /></div>
        })
        return (
            <div  className="sidebar">
            <h1>Templates</h1>
            <div  className="search-bar">
                <form>
                    <input  className="search-box" type="text" placeholder="search templates ..." />
                    <button  className="search"><i  className="fas fa-search"></i></button>
                </form>
            </div>
             <div  className="sub-header">
            <ul>
                <div  className="li-active">Heist</div>
                <div><li>Internet</li></div>                  
            </ul>
        </div>

        <div  className="templates">
            {memes}       
        </div>
       </div>
        )
    }
}

export default Sidebar


