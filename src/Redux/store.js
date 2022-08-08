import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/index";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getNews } from "./action";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(getNews())
export default store