import { FILE_UPLOAD_FAILS, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, GET_ALL_FLIGHT_DETAILS_FAILS, GET_ALL_FLIGHT_DETAILS_REQUEST, GET_ALL_FLIGHT_DETAILS_SUCCESS } from "../Constants/AdminConstance"
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

export const FileUploadAction = (data) => async (dispatch, getState) => {
    try {
        dispatch({ type: FILE_UPLOAD_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${userInfo.token}` } }
        const { deta } = await axios.post("/fileupload/", data, config)
        dispatch({ type: FILE_UPLOAD_SUCCESS, payload: deta });
        dispatch(GetAllFlightDetailsAction())
    } catch (error) {
        dispatch({ type: FILE_UPLOAD_FAILS, payload: error.response && error.response.data })
    }
}