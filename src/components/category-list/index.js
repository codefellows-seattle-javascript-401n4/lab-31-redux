import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from '../category-item';

class CategoryList extends React.Component {
  render() {
    const {
      categories,
      updateCategory,
      deleteCategory,
    } = this.props;

    const listItems = categories.map(ele =>
      (
        <CategoryItem
          key={ele.id}
          note={ele}
          updateCategory={updateCategory}
          deleteCategory={deleteCategory}
        />
      ));
    return (
      <ul>{listItems}</ul>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default CategoryList;
