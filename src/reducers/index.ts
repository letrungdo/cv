import { combineReducers } from "redux";

var rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
