import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {appReducer} from "./reducers/app.reducer";
import thunk from "redux-thunk" 

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers({
        appReducer
    }),
    applyMiddleware(logger, thunk)
);

export default store;
