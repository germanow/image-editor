"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ToolBar from './ToolBar.jsx';
import Canv from './Canv.jsx';

class App extends React.Component {
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
            <div>
                <h2>Editor</h2>
                <ToolBar/>
                <Canv/>
            </div>
        );
    };
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
