import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { UserLoginReducer, UserRegisterReducer } from '../Reducer/CommonReducer'
import { AdminGetAllAirportDetailsReducer, AirlinsFileUploadReducer, FileUploadReducer, GetAllFlightDetailsReducer } from '../Reducer/AdminReducer'
import { GetAllAirportDetailsReducer, GetFlightDetailsReducer, GetWeeklyFlightDetailsReducer, PreflightbookingReducer } from '../Reducer/UserReducer'

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const reducer = combineReducers({
    userRegister: UserRegisterReducer,
    userLogin: UserLoginReducer,
    GetAllFlightDetails: GetAllFlightDetailsReducer,
    FileUpload: FileUploadReducer,
    AllAirport: GetAllAirportDetailsReducer,
    GetFlightDetails: GetFlightDetailsReducer,
    GetWeekFlight: GetWeeklyFlightDetailsReducer,
    AirlinsFileUpload: AirlinsFileUploadReducer,
    AdminAllAirportDetails: AdminGetAllAirportDetailsReducer,
    PreFlightBooking: PreflightbookingReducer
})

const intialState = {
    userLogin: { userInfo: userInfoFromLocalStorage }
}

const middleware = [thunk]

const configureStore = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default configureStore