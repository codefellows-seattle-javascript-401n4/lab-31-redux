import React from 'react';
import ReactDom from 'react-dom'

import { Link, Route } from 'react-router-dom';
import Category from './Category.js';

class App extends React.Component {
    
    constructor(props) { 
        super(props);
    }
    
    render() {
        return (
            <div>
                <nav>
                <Link to="/">Home</Link>
                </nav>
                <Route path="/" component={Category}/>
                
            </div>
        )
    }
    
}

module.exports = App;