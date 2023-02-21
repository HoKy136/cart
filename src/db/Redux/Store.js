import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import { mySaga } from "../GetAPI";
import {ReduxProduct  } from "./Reducers/ReduxProduct";

const saga = reduxSaga()
const root = combineReducers({
    ReduxProduct,
})

const store = createStore(root, applyMiddleware(saga))
saga.run(mySaga)
export default store