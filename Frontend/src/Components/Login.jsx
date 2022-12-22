import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { Button, Col, Image, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../Images/logo.png'
import styled from 'styled-components'
import '../Css/Register.css'

const FormContainer = styled.div``;

export default function Login() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const OnSubmit = async (data) => {
        useDispatch(data)
        // reset()
    }

    return (
        <>
            <FormContainer className='LoginForm'>
                <form onSubmit={handleSubmit(OnSubmit)} autoComplete="off">
                    <Row>
                        <div className="brand">
                            <Image src={Logo} alt='Logo' />
                            <h1>5travellerss</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="text" placeholder='UserName' name='userName' {...register("userName", { required: "User Name is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="userName" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="password" placeholder='Password' name='password' {...register("password", { required: "Password is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="password" className='position-absolute' as="p" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                            <Button type='submit' className='mb-0'> Login User </Button>
                            <span className='message'>don't have an account ? <Link to={"/register"}> Register </Link></span>
                        </Col>
                    </Row>
                </form>
            </FormContainer>
        </>
    )
}