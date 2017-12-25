import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import Header from './components/header';
import Footer from './components/footer';
import Modal from './components/modal';
import Navbar from './components/navbar';
import Home from './components/home';
import Expenses from './components/expenses';
import Categories from './components/categories/category-container';

import store from './app/store';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: 0,
      expenses: [],
      showErrors: true,
    };

    this.app = this.app.bind(this);
    this.updateTheBudget = this.updateTheBudget.bind(this);
  }

  componentDidMount() {
    console.log('__STATE__', this.state);
  }

  updateTheBudget(budget) {
    this.setState({ budget });
  }

  app() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
      showErrors: true,
    };
  }

  render() {
    return (
      <Provider>
      <div>
        <Header appTitle="ReDuX!" />

        <Navbar />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/expenses" component={() => <Expenses handler={this.updateTheBudget} app={this.app()} />} />
          <Route exact path="/categories" component={Categories} />
        </main>

        <Footer>
          <p>&copy;2017 Darryl D</p>
        </Footer>
      </div>
    );
  }
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
