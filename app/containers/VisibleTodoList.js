import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL'       : return todos
    case 'SHOW_ACTIVE'    : return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED' : return todos.filter(todo => todo.completed)
  }
};

const mapStateToProps    = (state)    => {return {todos: getVisibleTodos(state.todos, state.setFilter)} };
// const mapStateToProps    = (state)    => {return {todos: state} };

const mapDispatchToProps = (dispatch) => {return {onTodoClick: (id) => dispatch(toggleTodo(id))} };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
