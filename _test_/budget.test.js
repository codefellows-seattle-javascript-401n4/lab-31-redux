'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Jest from 'jest';
import uuid from 'uuid/v1';
import CatForm from '../src/components/catForm.js';



test('create a new budget with the name groceries and the budget amount to be ', () => {
  let name = 'groceries';
  let isEditing = false;
  let budget = 20;
  let createBudget = (state) => {
    expect(CatForm.state().name).toBe('groceries');
    expect(CatForm.state().isEditing).toBe(false);
    expect(CatForm.state().budget).toBe(20);
  };
  const component = renderer.create(
    <CatForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}
);

test('test should fail because of change in budget content', () => {
  const component = renderer.create(
    <CatForm />
  );

  const other = renderer.create(
    <CatForm name="games"/>
  );

  let tree = component.toJSON();
  let otherTree = other.toJSON();
  expect(tree).toMatchSnapshot();
  expect(otherTree).toEqual(tree);
});

test('should pass with unique ids',() => {
  const component = renderer.create(
    <CatForm id='2222'/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail with non unique ids', () => {
  const component = renderer.create(
    <CatForm id='2222'/>
  );
  const other = renderer.create(
    <CatForm id='2222'/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(other).toBe(tree);

});
