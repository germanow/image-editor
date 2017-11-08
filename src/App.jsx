"use strict";

import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import generateId from './generateId.js'

import ToolBar from './ToolBar.jsx';
import Canv from './Canv.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            canvas:{
                rects:{
                    "1":{
                        id: 1,
                        x:0,
                        y:0,
                        width:100,
                        height:100,
                        color: "green"
                    }
                },
                selected: "1"
            }
        };
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    handleAddRectangle(){
        let id = generateId();
        let rect = {
            id: id,
            x:0,
            y:0,
            width:"100",
            height:"100",
            color: "black"
        };
        
        this.setState(prevstate => {
            let rects = Object.assign({}, prevstate.canvas.rects);
            rects[id] = rect;
            return {
                canvas:{
                    rects: rects,
                    selected: id
                }
            };
        });
    }
    
    handleDragEnd(e, id){
        this.setState(prevstate => {
            let rects = Object.assign({}, prevstate.canvas.rects);
            let rect = rects[id];
            rect.x = e.target.attrs.x;
            rect.y = e.target.attrs.y;
            return {
                canvas:{
                    rects: rects,
                    selected: prevstate.canvas.selected
                }
            };
        });
    }
    
    handleDragMove(e, id) {
        
    }
    
    handleClick(e, id) {
        this.setState(prevstate => {
            return {
                canvas:{
                    rects: prevstate.canvas.rects,
                    selected: id
                }
            };
        });
    }
    
    
    
    render() {
        return (
            <div>
                <h2>Editor</h2>
                <ToolBar 
                    onRectangle={this.handleAddRectangle.bind(this)} 
                />
                <Canv 
                    canvas={this.state.canvas}
                    handleDragEnd={this.handleDragEnd.bind(this)}
                    handleDragMove={this.handleDragMove.bind(this)}
                    handleClick={this.handleClick.bind(this)}
                />
            </div>
        );
    };
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
