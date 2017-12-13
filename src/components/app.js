import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Dashboard from './dashboard'
// import Categories from './categories/category-container'

class App extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="Trellissimo" />
        <Navbar />
        <main>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/categories' component={Categories} />
        </main>
        <Footer>
          <p>Mookerjee Productions 2007</p>
        </Footer>
      </div>
    )
  }
}

export default App;