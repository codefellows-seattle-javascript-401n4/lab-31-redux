import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() => <h1> Sup </h1>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
