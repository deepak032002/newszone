import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
    news: homePageReducer
})

export default rootReducer