import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faFileSignature, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { FileUploadAction } from '../../Redux/Action/AdminAction'

export default function AdminFileUploadModal() {
    const [first, setfirst] = useState("")

    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm()
    const dispatch = useDispatch()

    const fileUpload = (e) => {
        e.preventDefault()
        const fordata = new FormData()
        fordata.append('excel', first)
        dispatch(FileUploadAction(fordata))
    }

    return (
        <>
            <div className="modal fade text-left" id="fileuploadModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel1">Upload Excel File For Information</h5>
                            <button type="button" className="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faXmark} />
                                <i data-feather="x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form form-horizontal" id='uploadform' onSubmit={fileUpload}>
                                <div className="form-body">
                                    <div className="row">
                                        {/* <div className="col-md-4">
                                            <label>File Name</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group has-icon-left">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control" placeholder="File Name" id="filename" {...register('filename', { required: true })} style={{ "border": "1px solid rgba(0, 0, 0, 0.34)" }} />
                                                    <div className="form-control-icon">
                                                        <FontAwesomeIcon icon={faFileSignature} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-4">
                                            <label>Upload File</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group has-icon-left">
                                                <div className="position-relative">
                                                    <input type="file" className="form-control" id="fileupload" onChange={(e)=> setfirst(e.target.files[0])} style={{ "border": "1px solid rgba(0, 0, 0, 0.34)" }} />
                                                    <div className="form-control-icon">
                                                        <FontAwesomeIcon icon={faFileImport}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end ">
                                            <button type="submit" className="btn btn-primary me-1 mb-1">Submit</button>
                                            <button type="reset" className="btn btn-light-secondary me-1 mb-1">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="bx bx-x d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Reset</span>
                            </button>
                            <button type="button" className="btn btn-primary ml-1" data-bs-dismiss="modal">
                                <i className="bx bx-check d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Accept</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
