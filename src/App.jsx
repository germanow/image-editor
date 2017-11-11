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
                selected: "1",
                resize: false
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
        //Save new coordinate of rectangle in react state
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
        //Select element on click
        this.setState(prevstate => {
            return {
                canvas:{
                    rects: prevstate.canvas.rects,
                    selected: id
                }
            };
        });
    }
    
    handleResizeState(resize) {
        this.setState(prevstate => {
            let newState = Object.assign({}, prevstate);
            newState.canvas.resize = resize;
            return newState;
        });
    }
    
    handleResizeMove(e, circle) {
        switch (circle){
            case 'topLeft':
                this.setState(prevstate => {
                    let rects = Object.assign({}, prevstate.canvas.rects);
                    let rect = rects[this.state.canvas.selected];
                    rect.x += e.evt.movementX;
                    rect.y += e.evt.movementY;
                    rect.width -= e.evt.movementX;
                    rect.height -= e.evt.movementY;
                    return {
                        canvas:{
                            rects: rects,
                            selected: prevstate.canvas.selected
                        }
                    };
                });
                break;
        }
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
                    handleResizeState={this.handleResizeState.bind(this)}
                    handleResizeMove={this.handleResizeMove.bind(this)}
                    selectedRef={refs => this.selectedRef = refs}
                    layerRef={refs => this.layerRef = refs}
                />
            </div>
        );
    };
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
