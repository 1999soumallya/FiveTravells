import React from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/Dashboard.css'
import { useSelector } from 'react-redux'
import { MagnifineLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'

export default function Dashboard() {

    const GetFlightDetails = useSelector((state) => state.GetFlightDetails)

    const { loading, Flightdetails, Flightdetailserror } = GetFlightDetails

    return (
        <Container>
            {/* <!-- Destination Time table --> */}
            <div className="table_grid">
                {
                    loading ? <MagnifineLoader /> : Flightdetailserror ? <ErrorAlert variant={"danger"} children={Flightdetailserror} /> : (
                        Flightdetails.map((Flightdetails) => (
                            <div className="destime_table" key={Flightdetails._id}>
                                <div className="des_content">
                                    <img src="images/icon.jpg" alt="" />
                                    <h4>{Flightdetails.AIRLINE_LOGO}</h4>
                                </div>
                                <div className="des_title">
                                    <h3>{Flightdetails.FORM}</h3>
                                    <h2>17:45</h2>
                                </div>
                                <div className="des_time">
                                    <h4>{Flightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[0]} hrs {Flightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[1].toLowerCase()}</h4>
                                    <span>Direct</span>
                                </div>
                                <div className="des_title">
                                    <h3>{Flightdetails.SECTOR}</h3>
                                    <h2>17:45</h2>
                                </div>
                                <div className="des_price">
                                    <span> non refoundable</span>
                                    <h3><i className="fa-solid fa-indian-rupee-sign"></i>{Flightdetails.PRICE}</h3>
                                </div>
                                <div className="des_bookbtn">
                                    <button>book</button>
                                    <p>Seats left : {Flightdetails.SEATS_AVAILABLE}</p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            {/* <!-- Destination Time table --> */}
        </Container>
    )
}
