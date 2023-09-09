import React, {Component} from "react";
import {First} from './First'
import { Second } from "./Second";
import '../App.css';
class Third extends Component{
    constructor(){
        super();
        this.state={
            Mn: false,
            Mp: false,
        }
    }

render(){
      return(
        <div className="bbb">
        <button className="btn" onClick={()=>this.setState({Mp: !this.state.Mp})}> To see styling class Component</button>
        <button className="btn" onClick={()=>this.setState({Mn: !this.state.Mn})}> To see styling function Component</button>
        {this.state.Mp && <First/> }
        {this.state.Mn  && <Second/>}
        </div>
    
      )
}
}    
 export  default Third