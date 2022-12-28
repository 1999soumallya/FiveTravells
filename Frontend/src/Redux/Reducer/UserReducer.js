import { GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS } from "../Constants/UserConstance";

export const GetAllAirportDetailsReducer = (state = { Allairport: [] }, action) => {
    switch (action.type) {
        case GET_ALL_AIRPORT_DETAILS_REQUEST:
            return { loading: true, Allairport: [] };
        
        case GET_ALL_AIRPORT_DETAILS_SUCCESS:
            return { loading: false, Allairport: action.payload }
        
        case GET_ALL_AIRPORT_DETAILS_FAILS:
            return { loading: false, Allairporterror: action.payload };
    
        default:
            return state;
    }
}