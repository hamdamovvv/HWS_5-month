import {configureStore} from '@reduxjs/toolkit'
import photosReducer from './features/photos/photosSlice';
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App.jsx";




const store = configureStore({
  reducer: {
    photos: photosReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
