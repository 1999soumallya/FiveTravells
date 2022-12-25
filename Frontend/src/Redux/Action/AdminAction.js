import { GET_ALL_FLIGHT_DETAILS_FAILS, GET_ALL_FLIGHT_DETAILS_REQUEST, GET_ALL_FLIGHT_DETAILS_SUCCESS } from "../Constants/AdminConstance"
import axios from 'axios'

export const GetAllFlightDetailsAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get("/admin", config)
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}