"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import generateId from './generateId.js';

export default class Canv extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount(){
        //Global settings for resize appearance
        fabric.Object.prototype.set({
            cornerStyle: "circle",
            transparentCorners: false,
//            borderColor: '#ff00ff',
//            cornerColor: '#ff0000'
        });
        const canvas = new fabric.Canvas('canv', {
            width: this.props.width,
            height: this.props.height,
            backgrounColor: '#eee'
        });
        //Pass canvas to parent
        this.props.getCanvas(canvas);
    };
    
    componentWillUnmount(){
        
    };
    
    render() {
        return (
            <div className="canv">
                <canvas 
                    id="canv"
                />
                <div id="images"></div>
            </div>
        );
    };
};