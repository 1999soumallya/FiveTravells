import axios from "axios"
import { GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS } from "../Constants/UserConstance"

export const GetAllAirportDetailsAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get('/user/', config)
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}