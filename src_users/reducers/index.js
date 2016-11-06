import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import users from "./users";
import loading from "./loading";

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    users: users,
    loading: loading,
});