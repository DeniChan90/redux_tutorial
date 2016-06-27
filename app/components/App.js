import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodos from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodos/>
    <Footer/>
  </div>
);

export default App;
