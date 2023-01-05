import React from 'react'
import AdminAirlinesDetailsUploadModal from './AdminAirlinesDetailsUploadModal'

export default function AdminFlightList() {
  return (
    <>
      <div className='d-flex justify-content-end'>
        <button type="button" className="btn btn-outline-primary block" data-bs-toggle="modal" data-bs-target="#AirlinesDetailsUpload">
          Upload File
        </button>
      </div>
      <AdminAirlinesDetailsUploadModal/>
    </>
  )
}
