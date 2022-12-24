import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminFileUploadModal from './AdminFileUploadModal'

export default function AdminFileUpload() {
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
            <div className='d-flex justify-content-end'>
            <button type="button" className="btn btn-outline-primary block" data-bs-toggle="modal" data-bs-target="#fileuploadModal">
                Upload File
            </button>
            </div>
            <AdminFileUploadModal/>
        </>
    )
}
