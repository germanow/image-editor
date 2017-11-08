"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';

export default class CustomRect extends React.Component {
    constructor(props){
        super(props);
        this.state = {color: 'red'};
    };
    
    handleClick(){
       alert('dsadas')
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    render() {
        
        return (
            <Rect
                x={10}
                y={10}
                width={50}
                height={50}
                fill={this.state.color}
                shadowBlur={5}
                onClick={this.handleClick}
            />
        );
    };
};