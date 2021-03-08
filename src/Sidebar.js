import React, { PureComponent  } from 'react'
export class Sidebar extends PureComponent  {

    state={
        search : '',
        activeLink : 'internet'
    }

    render() {
        const memes = this.props.results.map(meme=>{
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
                <div onClick={()=>this.setState({activeLink:'heist'})} className={this.state.activeLink === 'heist' ? "li-active":''}>Heist</div>
                <div onClick={()=>this.setState({activeLink:'internet'})} className={this.state.activeLink === 'internet' ? "li-active":''}>Internet</div>              
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


