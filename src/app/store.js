import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import inputArrayReducer from '../features/inputArray/InputArraySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    inputArray: inputArrayReducer,
  },
});
