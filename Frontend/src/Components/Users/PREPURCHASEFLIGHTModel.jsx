import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import Calendar from 'react-input-calendar'
import validator from 'validator'

export default function PREPURCHASEFLIGHTModel({ FlightDate }) {

    const { handleSubmit, reset, formState: { errors }, register, clearErrors, control } = useForm()

    const onFormSubmit = (deta) => {
        if (validateEmail(deta.email) === false) {
            return
        }
        console.log(deta);
    }

    const clearAll = () => {
        reset()
        clearErrors()
    }

    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            return false
        }
    }


    return (
        <>
            <div class="modal fade" id="PrePurchaseFlightModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => clearAll()}></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="">Name</label>
                                            <input type="text" name="" placeholder="Name" class="form-control" {...register('name', { required: true })} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="">Email ID</label>
                                            <input type="email" name="" placeholder="Email ID" class="form-control" {...register('emailid', { required: true })} />
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="">Contact Number</label>
                                            <PhoneInputWithCountry name="phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="">Destination Date & Flight</label>
                                            <Controller control={control} name="fileghtDate" rules={{ required: "Date Of Birth is Require can not blank It" }} render={({ field }) => (
                                                <Calendar format='DD-MM-YYYY' date={new Date(FlightDate)} minDate={new Date(FlightDate)} onChange={(date) => field.onChange(date)} />
                                            )} />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="">Adults</label>

                                            <select class="form-control">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                                <option value="1">6</option>
                                                <option value="1">7</option>
                                                <option value="1">8</option>
                                                <option value="1">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="">Child</label>
                                            <select class="form-control">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                                <option value="1">6</option>
                                                <option value="1">7</option>
                                                <option value="1">8</option>
                                                <option value="1">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="">Infant</label>
                                            <select class="form-control">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                                <option value="1">6</option>
                                                <option value="1">7</option>
                                                <option value="1">8</option>
                                                <option value="1">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group d-flex gap-2">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> I Accept Privacy Policy & Terms </label>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' hidden id='submitbutton'>Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => document.getElementById('submitbutton').click()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
