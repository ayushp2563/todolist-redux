import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";

const store = configureStore({
  reducer: rootReducer,
  enhancers:
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
});

export default store;
