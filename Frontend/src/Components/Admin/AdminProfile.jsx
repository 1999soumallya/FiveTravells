import React, { useEffect, useState } from 'react'
import '../../Css/Profile.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import ProfileImage from '../../Images/avatar/avatar-s.png'
import { useForm } from 'react-hook-form'

export default function AdminProfile() {
    const [name, setname] = useState("")
    const [userType, setuserType] = useState("")

    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin

    const navigate = useNavigate()

    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        if (userInfo) {
            let dob = userInfo.dob.split('-')[2] + "-" + userInfo.dob.split('-')[0] + "-" + userInfo.dob.split('-')[1]
            setname(userInfo.name)
            setuserType(userInfo.userType)
            setValue('profilename', userInfo.name)
            setValue('profileemail', userInfo.email)
            setValue('profilemobileNumber', userInfo.phoneNo)
            setValue('profiledob', dob)
        }
    }, [navigate, setValue, userInfo])

    const updateProfileDetails = (data) => {
        console.log(data);
    }

    return (
        <>
            <Row className="user">
                <Col md={12} className="mb-3">
                    <div className="profile">
                        <div className="info">
                            <img className="user-img" src={ProfileImage} alt='UserImage' />
                            <h4>{name}</h4>
                            <p>{userType}</p>
                        </div>
                        <div className="cover-image" />
                    </div>
                </Col>
                <Col md={12}>
                    <div className="tile user-settings">
                        <form onSubmit={handleSubmit(updateProfileDetails)}>
                            <Row className="mb-4">
                                <Col md={6} className="mb-4">
                                    <label>Name</label>
                                    <input className="form-control" type="text" value={name} {...register("profilename", { required: true })} />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <label>Email</label>
                                    <input className="form-control" type="email" {...register("profileemail", { required: true })} />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <label>Mobile No</label>
                                    <input className="form-control" type="text" {...register("profilemobileNumber", { required: true })} />
                                </Col>
                                <Col md={6} className="mb-4">
                                    <label>Date Of Birth</label>
                                    <input className="form-control" type="date" {...register("profiledob", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="btn btn-primary" type="submit"><span id='saveicon'><FontAwesomeIcon icon={faCircleCheck} /></span> Save </button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
