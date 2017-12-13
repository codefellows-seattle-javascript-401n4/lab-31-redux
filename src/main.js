import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './component/app';

import './style/main.scss';

console.log('hello');

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);