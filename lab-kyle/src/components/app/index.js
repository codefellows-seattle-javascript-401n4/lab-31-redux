import './style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import Header from './header';
import Home from './home';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(
    return(
      <div>
        <Header appTitle="Budget Tracker" />
        <Navbar />

        <main>
          <Route exact path='/'component={Home} />
        </main>

        <Footer>
          <p>&copy; 2017</p>
        </Footer>
      </div>
    )
  )
}
export default App;
