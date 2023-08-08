import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import RootReducer from "./RootReducer"

const middlewares = [reduxThunk]
middlewares.push(logger)
// if(process.env.NODE_ENV === "development") {
//     middlewares.push(logger)
// }

const store= createStore(rootReducer, applyMiddleware(...middlewares))

export default store