import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage"

import rootReducer from './reducer/rootReducer'

const persistConfig = {
  key:'root',
  storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const Persistor = persistStore(store)

export  {store, Persistor}