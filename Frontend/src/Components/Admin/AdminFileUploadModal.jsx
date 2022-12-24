import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faFileSignature, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'

export default function AdminFileUploadModal() {

    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm()

    const fileUpload = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="modal fade text-left" id="fileuploadModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
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
                            <form class="form form-horizontal" onSubmit={handleSubmit(fileUpload)} encType='multipart/form-data' method='POST'>
                                <div class="form-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>File Name</label>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-group has-icon-left">
                                                <div class="position-relative">
                                                    <input type="text" class="form-control" placeholder="File Name" id="filename" {...register('filename', { required: true })} style={{ "border": "1px solid rgba(0, 0, 0, 0.34)" }} />
                                                    <div class="form-control-icon">
                                                        <FontAwesomeIcon icon={faFileSignature} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label>Upload File</label>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-group has-icon-left">
                                                <div class="position-relative">
                                                    <input type="file" class="form-control" id="fileupload" {...register('fileupload', { required: true })} style={{ "border": "1px solid rgba(0, 0, 0, 0.34)" }} />
                                                    <div class="form-control-icon">
                                                        <FontAwesomeIcon icon={faFileImport}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-end ">
                                            <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
                                            <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
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
