'use strict';

//css, why are we not declaring this path the same way as the compenent/app paths?
import './style/main.scss';
//app compontents
import App from './components/app.js';
import createStore from './app/store.js';


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

const store = createStore();

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.subscribe( () => console.log("__STORE__", store.getState()) );
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));