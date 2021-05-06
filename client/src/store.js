import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import index from "./reducers";

const middleware = [thunk];

const store = createStore(
  index,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;