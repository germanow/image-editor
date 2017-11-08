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
    
    render() {
        return (
            <div id="toolbar" className="btn-toolbar" role="toolbar">
                <button type="button" className="btn btn-default" aria-label="Left Align">
                    Rectangle
                </button>
                <button type="button" className="btn btn-default" aria-label="Left Align">
                    Circle
                </button>
                <button type="button" className="btn btn-default" aria-label="Left Align">
                    Image
                </button>
            </div>
        );
    };
};