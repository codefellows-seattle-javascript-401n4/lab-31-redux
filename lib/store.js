'use strict';

import {createStore} from 'redux';

import reducer from '../src/reducer/reducer.js';

export default () => createStore(reducer);
