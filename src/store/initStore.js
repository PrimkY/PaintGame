import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';

const rootReducer = combineReducers({user: userSlice,})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  stateReconciler: hardSet,
}

const middlewareList = [];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancersList = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__)
  enhancersList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composedEnhancers = compose(middlewareEnhancer, ...enhancersList);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({reducer: persistedReducer,});
export const persistor = persistStore(store);

