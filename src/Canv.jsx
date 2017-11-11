"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';

import generateId from './generateId.js'

import Selected from './Selected.jsx';

export default class Canv extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    
    renderRect(){
        let rects = this.props.canvas.rects;
        let res = [];
        for(let id in rects){
            let rect = rects[id];
            if(this.props.canvas.selected == id){
                res.push(
                    <Group
                        key={rect.id}
                        x={rect.x}
                        y={rect.y}
                        draggable={!this.props.canvas.resize} 
                        onClick={(e) => this.props.handleClick(e, rect.id)}
                        onDragMove={(e) => this.props.handleDragMove(e, rect.id)}
                        onDragEnd={ !this.props.canvas.resize ? (e) => this.props.handleDragEnd(e, rect.id) : null}
                    >
                        <Rect
                            key={rect.id}
                            ref={this.props.selectedRef}
                            x={0}
                            y={0}
                            width={rect.height}
                            height={rect.height}
                            fill={rect.color}
                        />
                        <Selected 
                            key={rect.id*2}
                            canvas={this.props.canvas}  
                            size={1} 
                            handleResizeState={this.props.handleResizeState}
                            handleResizeMove={this.props.handleResizeMove}
                            resize={this.props.canvas.resize}
                        />
                    </Group>
                );
            } else {
                res.push(
                    <Rect
                        x={rect.x}
                        y={rect.y}
                        key={rect.id}
                        width={rect.height}
                        height={rect.height}
                        fill={rect.color}
                        draggable={false}
                        onClick={(e) => this.props.handleClick(e, rect.id)}
                        onDragMove={(e) => this.props.handleDragMove(e, rect.id)}
                        onDragEnd={(e) => this.props.handleDragEnd(e, rect.id)}
                    />        
                );
            }
        };
        return res;
    }
    
    render() {
        
        return (
            <div className="canv">
                <Stage width={800} height={600}>
                    <Layer ref={this.props.layerRef}>
                      {this.renderRect()}
                    </Layer>
                </Stage>
            </div>
        );
    };
};