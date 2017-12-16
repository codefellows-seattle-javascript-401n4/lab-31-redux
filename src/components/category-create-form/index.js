import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import BaseForm from '../form';

class CategoryCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [{
      key: 'submit-categories',
      type: 'submit',
      value: 'Submit',
      handler: noop,
    }];
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  onSubmit() {
    this.props.addCategory(this.state, 'categories');
  }

  setFormState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <BaseForm
        onSubmit={this.onSubmit}
        setFormState={this.setFormState}
        inputs={this.inputs}
      />
    );
  }
}

CategoryCreateForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default CategoryCreateForm;
