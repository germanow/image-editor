"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Group, Line, Circle} from 'react-konva';

import generateId from './generateId.js'

export default class Selected extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            circles:{
                topLeft:{strokeWidth:2},
                topRight:{strokeWidth:2},
                bottomRight:{strokeWidth:2},
                bottomLeft:{strokeWidth:2}
            }
        };
        this.handleMouseOnCircle.bind(this);
        this.handleMouseOutCircle.bind(this);
    };
    
    componentDidMount(){
        
    };
    
    componentWillUnmount(){
        
    };
    
    handleMouseOnCircle(e, id){
        this.setState(prevstate => {
            let newState = Object.assign({}, prevstate);
            newState.circles[id].strokeWidth *= 2;
            return newState;
        });
        document.body.style.cursor = 'pointer';
        this.props.handleResizeState(true);
    }
    
    handleMouseOutCircle(e, id){
        this.setState(prevstate => {
            let newState = Object.assign({}, prevstate);
            newState.circles[id].strokeWidth /= 2;
            return newState;
        });
        document.body.style.cursor = 'default';
        this.props.handleResizeState(false);
    }
    
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
        
        let dashSize = 3;
        
        let circleRadius = 6;
        let circleStrokeColor = '#003771';
        let circleFillColor = '#007bff';
        return (
            <Group>
                <Line
                    key={'line'}
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
                <Circle 
                    key={'topLeft'}
                    draggable={this.props.canvas.resize}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 'topLeft')}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 'topLeft')}
                    onDragMove={(e) => this.props.handleResizeMove(e, 'topLeft')}
                    x={x1}
                    y={y1}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles.topLeft.strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={'topRight'}
                    draggable={this.props.canvas.resize}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 'topRight')}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 'topRight')}
                    x={x2}
                    y={y2}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles.topRight.strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={'bottomRight'}
                    draggable={this.props.canvas.resize}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 'bottomRight')}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 'bottomRight')}
                    onDragMove={(e) => this.props.handleResizeMove(e, 'topLeft')}
                    x={x3}
                    y={y3}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles.bottomRight.strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={'bottomLeft'}
                    draggable={this.props.canvas.resize}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 'bottomLeft')}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 'bottomLeft')}
                    x={x4}
                    y={y4}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles.bottomLeft.strokeWidth}
                    radius={circleRadius}
                />
            </Group>
        );
    };
};

