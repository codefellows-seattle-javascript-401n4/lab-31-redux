import React from 'react';

import {connect} from 'react-redux';

import {categoryCreate, categoryDelete} from '../../app/actions';


class Categories extends React.Component {

  constructor(props) {
    super(props);
    console.log('InitialProps', props);
  }

  // componentDidUpdate() {
  //   console.log('UpdatedProps', this.props);
  //   this.setState({id: this.props.categories[0].id});
  // }
  // createExample = () => {
  //   this.props.createCategory({name:'David'});
  // }
  // deleteExample = () => {
  //   this.props.deleteCategory(this.state.id);
  // }
  render() {
    return (
      <div>
        <h1 onClick={this.createExample}>Larry</h1>
        <button onClick={this.deleteExample}>Delete Example</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  createCategory: category => dispatch(categoryCreate(category)),
  deleteCategory: _id => dispatch(categoryDelete(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
