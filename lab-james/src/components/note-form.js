import React from 'react';

class NoteForm extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <form>
        <label htmlFor="noteSubject">Subject:
          <input type="text" id="noteSubject" />
        </label>
        <label htmlFor="noteContent">Content:
          <input type="text" id="noteContent" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NoteForm;
