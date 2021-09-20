import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReduser from './auth-reduser'
import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'

const redusers = combineReducers({
  auth: authReduser,
  // form: formReducer
})

let store = createStore(redusers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store