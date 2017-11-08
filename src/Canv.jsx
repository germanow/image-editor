"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';

import CustomRect from './CustomRect.jsx';

export default class Canv extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    render() {
        
        return (
            <Stage width={700} height={700}>
                <Layer>
                  <CustomRect />
                </Layer>
            </Stage>
        );
    };
};