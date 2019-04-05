import { createStore, applyMiddleware, combineReducers } from "redux";
import tabReducer from "../reducers/tabReducer";
import formReducer from "../reducers/formReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    tab: tabReducer,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
