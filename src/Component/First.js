import React,{Component} from 'react';
 import '../App.css';

 class First extends Component{
    render(){
        return(
            <div className="hello">
                <h1> This is created using class Component</h1>
                <p> This is done using external CSS</p>
                <p class='blue'> This is done using inline CSS</p>

            </div>
        )
    }
 }

 export {First}