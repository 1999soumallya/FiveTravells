import { FILE_UPLOAD_FAILS, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, GET_ALL_FLIGHT_DETAILS_FAILS, GET_ALL_FLIGHT_DETAILS_REQUEST, GET_ALL_FLIGHT_DETAILS_SUCCESS } from '../Constants/AdminConstance'

export const GetAllFlightDetailsReducer = (state= {allFlight: []}, action) => {
    switch (action.type) {
        case GET_ALL_FLIGHT_DETAILS_REQUEST:
            return { loading: true, allFlight: [] }
        
        case GET_ALL_FLIGHT_DETAILS_SUCCESS:
            return { loading: false, allFlight: action.payload };
        
        case GET_ALL_FLIGHT_DETAILS_FAILS:
            return { loading: false, error: action.payload };
    
        default:
            return state;
    }
}

export const FileUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case FILE_UPLOAD_REQUEST:
            return { loading: true };
        
        case FILE_UPLOAD_SUCCESS:
            return { loading: false, fileupload: action.payload };
        
        case FILE_UPLOAD_FAILS:
            return { loading: false, error: action.payload };
    
        default:
            return state;
    }
}