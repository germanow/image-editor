"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-konva';

import generateId from './generateId.js'

export default class Selected extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    render() {
        let id = this.props.canvas.selected;
        let target = this.props.canvas.rects[id];
        let size = this.props.size;
        
        let x1 = +0-size/2;
        let y1 = +0-size/2;
        
        let x2 = +0+ +target.width+size/2;
        let y2 = +0-size/2;
        
        let x3 = +0+ +target.width+size/2;
        let y3 = +0+ +target.height+size/2;
        
        let x4 = +0-size/2;
        let y4 = +0+ +target.height+size/2;
        //#0099e4'
        let dashSize = 3
        return (
            <Line
                points={[
                    x1, y1,
                    x2, y2,
                    x3, y3,
                    x4, y4,
                    x1, y1,
                ]}
                stroke={'#007bff'}
                strokeWidth={size}
                dash={[dashSize*3, dashSize]}
            />
        );
    };
};