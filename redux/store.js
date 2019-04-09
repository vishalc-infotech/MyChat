import { createStore, combineReducers } from 'redux';
import TestReducer from './reducers/TestReducer';

const rootReducer = combineReducers({
  isPlayerDisplay: TestReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;