import axios from "axios"
import { GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS, GET_FLIGHT_DETAILS_FAILS, GET_FLIGHT_DETAILS_REQUEST, GET_FLIGHT_DETAILS_SUCCESS } from "../Constants/UserConstance"

export const GetAllAirportDetailsAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get('/user/', config)
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const GetFlightDetailsAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: GET_FLIGHT_DETAILS_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { deta } = await axios.post('/user/flightdetails', data, config)
        dispatch({ type: GET_FLIGHT_DETAILS_SUCCESS, payload: deta })
    } catch (error) {
        dispatch({ type: GET_FLIGHT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}