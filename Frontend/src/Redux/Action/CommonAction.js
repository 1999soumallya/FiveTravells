import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/CommonConstants"
import axios from 'axios'

export const UserRegisterAction = (deta) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data } = await axios.post('/auth/', deta)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.response && error.response.data })
    }
}

export const UserLoginAction = (deta) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.post('/auth/signin', deta)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data })
    }
}

export const UserLogout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
}