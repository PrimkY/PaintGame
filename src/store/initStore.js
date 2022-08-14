import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const middlewareList = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancersList = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) enhancersList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composedEnhancers = compose(middlewareEnhancer, ...enhancersList);


const persistConfig = {
  key: 'root',
  storage,
  version: 1.0,
  stateReconciler: hardSet,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, composedEnhancers);

export const persistor = persistStore(store);

