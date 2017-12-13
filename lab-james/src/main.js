import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import NoteForm from './components/note-form.js';

import createStore from './app/store.js';

const store = createStore();

class Main extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <div>
          <NoteForm />
        </div>
      </Provider>
    )
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
