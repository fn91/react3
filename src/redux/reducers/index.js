import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer.js";

const rootReducer = combineReducers({
  tasks: itemsReducer,
  // Otros reducers aquí si los tienes
});

export default rootReducer;
