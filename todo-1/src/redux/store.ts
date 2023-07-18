import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import todoReducer from './reducers/todoSlice'
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    todo: todoReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = configureStore({
    reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export let persistor = persistStore(store)

export default store