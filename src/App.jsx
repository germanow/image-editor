"use strict";

import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import fbric from 'fabric';

import generateId from './generateId.js'

import ToolBar from './ToolBar.jsx';
import Canv from './Canv.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            canvasWidth:800,
            canvasHeight:600,
            defaultElementSize: 100,
            selectedColor: "#000000"
        };
    };
    
    componentDidMount(){
        this.canvas.on('object:selected', (function(option){
            let obj = option.target;
            if(obj.hasOwnProperty('fill')){
                this.setState({selectedColor:obj.fill});
            };
        }).bind(this));
    };
    
    componentWillUnmount(){
    
    };
    
    handleAddRectangle(){
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: '#000000',
            width: this.state.defaultElementSize,
            height: this.state.defaultElementSize
        });
        this.canvas.add(rect);
    };
    
    handleAddCircle(){
        let circle = new fabric.Circle({
            left: 100,
            top: 100,
            fill: '#000000',
            radius: this.state.defaultElementSize/2
        });
        this.canvas.add(circle);
    };
    
    handleAddImage(id){
        let canvasWidth = this.state.canvasWidth;
        let canvasHeight = this.state.canvasHeight;
        setTimeout(() => {
            //To make the picture fit into the canvas
            let imgElement = document.getElementById(id);
            let width = imgElement.naturalWidth;
            let height = imgElement.naturalHeight;
            while(width > canvasWidth || height > canvasHeight){
                width = width/2;
                height = height/2;
            }
            let imgInstance = new fabric.Image(imgElement, {
              left: 0,
              top: 0,
              width: width,
              height:height
            });
            this.canvas.add(imgInstance);
        }, 50);
    };
    
    handleDelete(){
        if(this.canvas.getActiveGroup()){
            this.canvas.getActiveGroup().forEachObject(o => this.canvas.remove(o));
            this.canvas.discardActiveGroup().renderAll();
        } else {
            this.canvas.remove(this.canvas.getActiveObject());
        }
    };
    
    handleChangeColor(color){
        this.setState({selectedColor:color});
        if(this.canvas.getActiveGroup()){
            this.canvas.getActiveGroup().forEachObject(function(obj){
                if(obj.hasOwnProperty('fill')){
                    obj.setColor(color);
                };
            });
            this.canvas.renderAll();
        } else if(this.canvas.getActiveObject()) {
            let obj = this.canvas.getActiveObject();
            if(obj.hasOwnProperty('fill')){
                obj.setColor(color);
            };
            this.canvas.renderAll();
        };
    };
    
    render() {
        return (
            <div>
                <h2>Editor</h2>
                <ToolBar 
                    onAddRectangle={this.handleAddRectangle.bind(this)} 
                    onAddCircle={this.handleAddCircle.bind(this)} 
                    onAddImage={this.handleAddImage.bind(this)} 
                    onChangeColor={this.handleChangeColor.bind(this)}
                    selectedColor={this.state.selectedColor}
                />
                <Canv 
                    onDelete={this.handleDelete.bind(this)}
                    getCanvas={canvas => this.canvas = canvas}
                    width={800}
                    height={600}
                />
            </div>
        );
    };
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
