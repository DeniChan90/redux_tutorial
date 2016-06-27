import React, { PropTypes } from 'react';
import Todo from './Todo';


const mock = [
  {
    id    : 0,
    text  : 'test1',
    completed : false
  },
  {
    id    : 1,
    text  : 'test1',
    completed : false
  },
  {
    id    : 2,
    text  : 'test1',
    completed : false
  },
]
const TodoList = ({todos, onTodoClick}) => (
  <ul>
  {console.log('todoList', todos, onTodoClick)}
  {todos.map(todo =>
      <Todo key = {todo.id}  {...todo} onClick = {() => onTodoClick(todo.id)}/>
    )}
  </ul>
);

TodoList.propTypes = {
  todos     : PropTypes.arrayOf(PropTypes.shape({
    id        : PropTypes.number.isRequired,
    completed : PropTypes.bool.isRequired,
    text      : PropTypes.string.isRequired
  }).isRequired).isRequired,
onTodoClick : PropTypes.func.isRequired
};

export default TodoList
