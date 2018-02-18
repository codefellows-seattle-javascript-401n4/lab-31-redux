'use strict';

// import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

import App from './component/app';

import createStore from './app/store';

const store = createStore();

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.subscribe( ()=> console.log( '_STORE', store.getState() ) );
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
         <App/>
        </BrowserRouter>
      </Provider>
    )
  }
}

const main = document.getElementById('root');

ReactDOM.render(<Main/>, main);
