import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({main: mainReducer, form: formReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;