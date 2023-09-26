import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';//for middleware
import thunk from 'redux-thunk';// for async code

const rootReducer = combineReducers({
    cash:       cashReducer,
    customer:   customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));