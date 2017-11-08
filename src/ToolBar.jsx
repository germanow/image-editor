"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

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
    
    handleCircle(){
        alert("dsadas");
    }
    
    render() {
        return (
            <div id="toolbar" className="btn-toolbar" role="toolbar">
                <button onClick={this.props.onRectangle}>
                    Rectangle
                </button>
                <button onClick={this.handleCircle.bind(this)}>
                    Circle
                </button>
                <button>
                    Image
                </button>
            </div>
        );
    };
};