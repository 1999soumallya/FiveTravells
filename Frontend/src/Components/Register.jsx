import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { Button, Col, Image, Row } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useDispatch } from 'react-redux'
import Calendar from 'react-input-calendar'
import validator from 'validator';
import styled from 'styled-components'
import Logo from '../Images/logo.png'
import '../Css/Register.css'
import 'react-phone-number-input/style.css'
import 'react-input-calendar/style/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { UserRegisterAction } from '../Redux/Action/UserAction';

const FormContainer = styled.div``;

export default function Register() {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors, control } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            return false
        }
    }


    const OnSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Password & Confirm Password not matched", { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
            return
        }
        if (validateEmail(data.email) === false) {
            toast.error("Enter a valid Email", { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
            return
        }
        dispatch(UserRegisterAction(data))
        // reset()
        // clearErrors()
        // navigate('/')
    }


    return (
        <>
            <FormContainer className='RegisterForm'>
                <form onSubmit={handleSubmit(OnSubmit)} autoComplete="off">
                    <Row>
                        <div className="brand">
                            <Image src={Logo} alt='Logo' />
                            <h1>5travellerss</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="text" placeholder='Name' name='name' {...register("name", { required: "Name is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="name" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <Controller control={control} name="dob" rules={{ required: "Date Of Birth is Require can not blank It" }} render={({ field }) => (
                                <Calendar format='DD-MM-YYYY' date={new Date()} onChange={(date) => field.onChange(date)} />
                            )} />
                            <ErrorMessage errors={errors} name="dob" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="text" placeholder='UserName' name='userName' {...register("username", { required: "User Name is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="userName" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="email" placeholder='Email' name='email' {...register("email", { required: "Email is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="email" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <PhoneInputWithCountry name="phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                            <ErrorMessage errors={errors} name="phoneNo" className='position-absolute' as="p" />
                        </Col>
                        <Col md={6} className="mb-3 mt-3">
                            <input type="password" placeholder='Password' name='password' {...register("password", { required: "Password is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="password" className='position-absolute' as="p" />
                        </Col>
                        <Col md={6} className="mb-3 mt-3">
                            <input type="password" placeholder='Confirm Password' name='confirmPassword' {...register("confirmPassword", { required: "Confirm Password is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="confirmPassword" className='position-absolute' as="p" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                            <Button type='submit' className='mb-0'> Create User </Button>
                            <span className='message'>already have an account ? <Link to={"/login"}> Login </Link></span>
                        </Col>
                    </Row>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    )
}