"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import generateId from './generateId.js';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ToolBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    handleImageButton(){
        let imageInput = document.getElementById('image-input');
        imageInput.click();
    };
    
    handleChangeImage(e){
        let reader = new FileReader();
        let props = this.props;
        reader.onload = function(e){
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.display = "none";
            img.id = generateId();
            var images = document.getElementById('images');
            images.appendChild(img);
            props.onAddImage(img.id);
        };
        reader.onload.bind(this);
        reader.readAsDataURL(e.target.files[0]);
    };
    
    handleChangeColor(e){
        let color = e.target.value;
        this.props.onChangeColor(color);
    }
    
    render() {
        return (
            <div id="toolbar" className="btn-toolbar" role="toolbar">
                
                <button onClick={this.props.onAddRectangle}>
                    Rectangle
                </button>
                <button onClick={this.props.onAddCircle}>
                    Circle
                </button>
                <input onChange={this.handleChangeImage.bind(this)} id="image-input" className="file-input" name="img" type="file" accept="image/*"/>
                <button onClick={this.handleImageButton.bind(this)}>
                    Image
                </button>
                <input onChange={this.handleChangeColor.bind(this)} id="color-palette" name="color" type="color" value={this.props.selectedColor}/>
            </div>
        );
    };
};