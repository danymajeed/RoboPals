import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import App from './containers/App' 
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {searchRobots, requestRobots} from './reducers'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import 'tachyons' 


const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store = {store}>
	<App />
	</Provider>
	, document.getElementById('root'));
 
serviceWorker.unregister();
