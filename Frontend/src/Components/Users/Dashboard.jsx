import React from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/Dashboard.css'

export default function Dashboard() {
    return (
        <Container>
            {/* <!-- Destination Time table --> */}
            <div className="table_grid">
                <div className="destime_table">
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
                <div className="destime_table">
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
                <div className="destime_table">
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
            </div>
            {/* <!-- Destination Time table --> */}
        </Container>
    )
}
