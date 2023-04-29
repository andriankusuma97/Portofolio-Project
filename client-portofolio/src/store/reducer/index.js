import { combineReducers } from "redux";
import projectReducer from "./project";
import detailprojectReducer from "./detailProject";



export const rootReducer = combineReducers({
  projectReducer,
  detailprojectReducer,
})
