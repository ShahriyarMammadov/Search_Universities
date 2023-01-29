import { combineReducers } from "redux";
import { universitiesReducer } from "./universities.reducer";

export const rootReducer = combineReducers({
    universitiesReducer,
});