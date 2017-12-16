import React from 'react';
import PropTypes from 'prop-types';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.props.setFormState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const {
      inputs,
      inputId,
      category,
    } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="category">
          <input
            id={inputId}
            onChange={this.onChange}
            defaultValue={category.content}
          />
        </label>
        <div>
          {inputs.map(ele =>
            <input key={ele.key} type={ele.type} value={ele.value} onClick={ele.handler} />)}
        </div>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  // inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  // inputId: PropTypes.string,
  // category: PropTypes.PropTypes.instanceOf(Category),
};

CategoryForm.defaultProps = {
  inputId: 'content',
  category: { content: '' },
};

export default CategoryForm;
