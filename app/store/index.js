import {todoApp} from '../reducers/todoApp';
import {createStore} from 'redux';

export let store = createStore(todoApp);
