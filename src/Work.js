import { Link } from 'react-router-dom'
import profile from './assests/profile.jfif'
import React, { Component } from 'react'
import axios from 'axios'
import Draggable from 'react-draggable';


export class Work extends Component {

    state = {
        template : null,
        dragItems : []
    }
    
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
    
    async randomTemp(){
        const response = await axios.get('https://api.imgflip.com/get_memes')
        var number = Math.floor(Math.random() * 100); 
        console.log(response.data.data.memes[number])
        this.setState({template:response.data.data.memes[number]})
    }

    createText = () =>{
        const dragIte = this.state.dragItems
        dragIte.push(
            <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    bounds = {{left:0,top:0,right:350}}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                        <div style={{display:'inline-block',cursor:'pointer'}} className="handle">Hello</div>
            </Draggable>        
        )
        this.setState({dragItems:dragIte})
    }
 
 
    render() {

        const items =  this.state.dragItems.map((item,index)=><div key={index}>{item}</div>)

        const something = this.state.template ? this.state.template.url : null

        const ele = this.props.memeTemp ? (
            <div>
            <div style={{position:'absolute',
                        fontSize:'18px',
                        fontWeight:'bold',
                        WebkitTextStrokeColor:'white',
                        WebkitTextStrokeWidth:'0.2px'}}   
                                          
                className="image">
                    
                    {items}
                    
                    </div>

            <div className="image add-shadow">
            <img className="image" src={this.state.template?something:this.props.memeTemp.url} alt={this.props.memeTemp.name} />
            </div> 
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
                        <div onClick={this.createText} ><i className="fas fa-font"></i></div>
                        <div><i className="fas fa-download"></i></div>
                        <div><i className="fas fa-sliders-h"></i></div>
                    </div>
                    <div className="arrow" onClick={()=>this.randomTemp()}><i className="fas fa-chevron-right"></i></div>
                </div>
                
                {ele}
            <div></div>
        </div>
        </div>
        )
    }
}



export default Work

