import { combineReducers } from 'redux';
import { setFilter } from './setFilter';
import { todos } from './todos';

export let todoApp = combineReducers({
  setFilter,
  todos
})
