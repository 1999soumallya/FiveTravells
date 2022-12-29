import React from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/Dashboard.css'
import { useSelector } from 'react-redux'
import { MagnifineLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'

export default function Dashboard() {

    const FlightDetails = useSelector((state) => state.FlightDetails)

    const { loading, Flightdetails, Flightdetailserror } = FlightDetails

    return (
        <Container>
            {/* <!-- Destination Time table --> */}
            <div className="table_grid">
                {
                    loading ? <MagnifineLoader /> : Flightdetailserror ? <ErrorAlert variant={"danger"} children={Flightdetailserror} /> : (
                        Flightdetails.map((Flightdetails) => (
                            <>
                                <div className="destime_table" key={Flightdetails._id}>
                                    <div className="des_content">
                                        <img src="images/icon.jpg" alt="" />
                                        <h4>spice jet sg 8411</h4>
                                    </div>
                                    <div className="des_title">
                                        <h3>Del</h3>
                                        <h2>17:45</h2>
                                    </div>
                                    <div className="des_time">
                                        <h4>2 hrs 40 mins</h4>
                                        <span>Direct</span>
                                    </div>
                                    <div className="des_title">
                                        <h3>goa</h3>
                                        <h2>17:45</h2>
                                    </div>
                                    <div className="des_price">
                                        <span> non refoundable</span>
                                        <h3><i className="fa-solid fa-indian-rupee-sign"></i> 8000</h3>
                                    </div>
                                    <div className="des_bookbtn">
                                        <button>book</button>
                                        <p>Seats left : 6</p>
                                    </div>
                                </div>
                            </>
                        ))
                    )
                }
            </div>
            {/* <!-- Destination Time table --> */}
        </Container>
    )
}
