import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { UserLoginReducer, UserRegisterReducer } from '../Reducer/CommonReducer'
import { FileUploadReducer, GetAllFlightDetailsReducer } from '../Reducer/AdminReducer'

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const reducer = combineReducers({
    userRegister: UserRegisterReducer,
    userLogin: UserLoginReducer,
    GetAllFlightDetails: GetAllFlightDetailsReducer,
    FileUpload: FileUploadReducer
})

const intialState = {
    userLogin: { userInfo: userInfoFromLocalStorage }
}

const middleware = [thunk]

const configureStore = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default configureStore