import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {appReducer} from "./reducers/app.reducer";

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers({
        appReducer
    }),
    applyMiddleware(logger)
);

export default store;
