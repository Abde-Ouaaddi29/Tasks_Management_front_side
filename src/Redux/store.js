import { createStore } from 'redux';
import ReducerTodos from './reducer'; 

const store = createStore(ReducerTodos);

export default store;
