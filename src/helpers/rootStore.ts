import { connectRouter, routerMiddleware } from "connected-react-router";
import { combineReducers } from "redux";
import loginStore from '../features/login/store';
import registrationStore from '../features/registration/store';
import { createBrowserHistory } from 'history'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    loginStore,
    registrationStore
})

export const store = configureStore({
    reducer: reducer,
    middleware: [
        ...getDefaultMiddleware(), 
        routerMiddleware(history)
    ]
})

export type IReducerState = ReturnType<typeof store.getState>;