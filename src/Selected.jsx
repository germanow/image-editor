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
                1:{strokeWidth:2},
                2:{strokeWidth:2},
                3:{strokeWidth:2},
                4:{strokeWidth:2}
            }
        };
        this.handleMouseOnCircle.bind(this)
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
    }
    
    handleMouseOutCircle(e, id){
        this.setState(prevstate => {
            let newState = Object.assign({}, prevstate);
            newState.circles[id].strokeWidth /= 2;
            return newState;
        });
        document.body.style.cursor = 'default';
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
                    key={1}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 1)}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 1)}
                    x={x1}
                    y={y1}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles[1].strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={2}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 2)}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 2)}
                    x={x2}
                    y={y2}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles[2].strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={3}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 3)}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 3)}
                    x={x3}
                    y={y3}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles[3].strokeWidth}
                    radius={circleRadius}
                />
                <Circle 
                    key={4}
                    onMouseOver={(e) => this.handleMouseOnCircle(e, 4)}
                    onMouseOut={(e) => this.handleMouseOutCircle(e, 4)}
                    x={x4}
                    y={y4}
                    stroke={circleStrokeColor}
                    fill={circleFillColor}
                    strokeWidth={this.state.circles[4].strokeWidth}
                    radius={circleRadius}
                />
            </Group>
        );
    };
};

