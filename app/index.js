import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store';

render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);


// console.log('aiyo!', store.getState());

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
// store.subscribe(() => console.log(store.getState()))
//
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Do stuff'))
// store.dispatch(addTodo('Buy stuff'))
// store.dispatch(addTodo('Feel stuff'))
// store.dispatch(addTodo('enjoy stuff'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
