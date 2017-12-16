import React from 'react';
import PropTypes from 'prop-types';

import CategoryEditForm from '../category-edit-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.renderEditingForm = this.renderEditingForm.bind(this);
  }

  onClick(e) {
    this.props.deleteCategory(e.target.dataset.categoryid);
  }

  startEditing(e) {
    e.stopPropagation();
    console.log(e.target);

    this.props.updateCategory({ id: e.target.dataset.categoryid, editing: true });
  }

  renderEditingForm(category) {
    console.log('renderEditingForm', category);
    if (category.editing === true) {
      return (
        <CategoryEditForm category={category} updateCategory={this.props.updateCategory} />
      );
    }

    return (
      <li className="category-item">
        <div
          role="presentation"
          data-categoryid={category.id}
          onClick={this.startEditing}
        >
          {category.content}
        </div>
        <button data-categoryid={category.id} onClick={this.onClick}>Delete</button>
      </li>
    );
  }

  render() {
    const {
      category,
    } = this.props;
    return (
      <div>
        {this.renderEditingForm(category)}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  // category: PropTypes.instanceOf(Category).isRequired,
};

export default CategoryItem;
