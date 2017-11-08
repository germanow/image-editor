"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';

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
        return this.props.canvas.rects.map((rect) =>
            <Rect
                x={rect.x}
                y={rect.y}
                key={rect.id}
                width={rect.height}
                height={rect.height}
                fill="black"
                draggable="true"
            />
        )
    }
    
    render() {
        
        return (
            <div className="canv">
                <Stage width={800} height={600}>
                    <Layer>
                      {this.renderRect()}
                    </Layer>
                </Stage>
            </div>
        );
    };
};