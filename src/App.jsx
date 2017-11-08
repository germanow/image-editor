"use strict";

import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ToolBar from './ToolBar.jsx';
import Canv from './Canv.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            canvas:{
                rects:[
                    {
                        id: 1,
                        x:0,
                        y:0,
                        width:100,
                        height:100
                    }
                ]
            }
        };
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    generateId(){
        let degree = 3;
        var randomNumber = "";
        for(let i = 0; i < degree; i++){
            randomNumber += Math.floor(Math.random()*10);
        }
        let timestamp = Date.now().toString();
        return timestamp+randomNumber;
    }
    
    handleAddRectangle(){
        var rect = {
            id: this.generateId(),
            x:0,
            y:0,
            width:"100",
            height:"100"
        };
        console.log(rect.id);
        this.setState(prevstate => ({
            canvas:{
                rects: [...prevstate.canvas.rects, rect]
            }
        }));
    }
    
    render() {
        return (
            <div>
                <h2>Editor</h2>
                <ToolBar onRectangle={this.handleAddRectangle.bind(this)}/>
                <Canv canvas={this.state.canvas}/>
            </div>
        );
    };
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
