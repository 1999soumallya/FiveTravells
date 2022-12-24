import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

export default function AdminSideNavbar() {

    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }

    }, [navigate, userInfo])

    return (
        <>
            <div id="sidebar" className='active'>
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header">
                        <img src="assets/images/logo.svg" alt="" srcSet="" />
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className='sidebar-title'>Main Menu</li>
                            <li className="sidebar-item" id='dashboard'>
                                <Link to="/admin" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faHome} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item has-sub" id='fileupload'>
                                <Link to="/admin/fileupload" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span> File Upload </span>
                                </Link>
                            </li>
                            <li className="sidebar-item has-sub" id='addsubadmin'>
                                <Link to="/admin/addsubadmin" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <span> Add Sub Admin </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
