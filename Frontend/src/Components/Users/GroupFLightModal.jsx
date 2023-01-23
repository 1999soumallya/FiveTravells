import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { GetGroupFlightDetailsAction } from '../../Redux/Action/UserAction'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'

export default function GroupFLightModal() {

    const [Form, setForm] = useState("Delhi")
    const [TO, setTo] = useState("Goa")

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, clearErrors, reset, control } = useForm()

    const GroupFlight = useSelector((state) => state.GroupFlight)
    const AllAirport = useSelector((state) => state.AllAirport)
    const { Allairport } = AllAirport
    const { flightDetails, flightDetailserror } = GroupFlight

    useEffect(() => {
        dispatch(GetGroupFlightDetailsAction(Form, TO))
    }, [Form, TO, dispatch])


    const GroupFlightBooking = (data) => {
        data['Origin'] = Form
        data['Detination'] = TO
        console.log(data);
    }

    const clearAll = () => {
        reset()
        clearErrors()
    }

    return (
        <div className="modal fade" id="groupflightmodal" tabIndex="-1" aria-labelledby="exampleModalLabe2" data-bs-backdrop="static" data-bs-keyboard="false" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabe2">Group FLight Booking</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearAll}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(GroupFlightBooking)}>
                            <div className="row" id='selectflightdetails'>
                                <h1 className="modal-title fs-6 text-center" id="exampleModalLabe2">Select Flight Details</h1>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="selectflightRoute"> Select Flight Details </label>
                                        <div className='row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="selectflightRoute"> Form </label>
                                                    <select name="" id="selectflightRoute" className="form-control" value={Form} onChange={(e) => setForm(e.target.value)}>
                                                        <option value={'DELHI'} selected>New Delhi</option>
                                                        {
                                                            Allairport?.map((Allairport) => (
                                                                <option key={Allairport.City_Name} value={Allairport.City_Name}>{Allairport.City_Name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="selectflightRouteTO"> To </label>
                                                    <select name="" id="selectflightRouteTO" className="form-control" value={TO} onChange={(e) => setTo(e.target.value)}>
                                                        <option value={'GOA'} selected>GOA</option>
                                                        {
                                                            Allairport?.map((Allairport) => (
                                                                <option key={Allairport.City_Name} value={Allairport.City_Name}>{Allairport.City_Name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="selectflight"> Select Flight </label>
                                        {
                                            flightDetailserror ? <ErrorAlert children={flightDetailserror} variant={"success"} /> : (
                                                <select name="" id="selectflight" className="form-control" {...register('flightName', { required: true })}>
                                                    {
                                                        (Array.isArray(flightDetails)) && flightDetails.map((flightDetails) => (
                                                            <option value={flightDetails.AIRLINE_LOGO} key={flightDetails.id}>{flightDetails.AIRLINE_LOGO}</option>
                                                        ))
                                                    }
                                                </select>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h1 className="modal-title fs-6 text-center" id="exampleModalLabe2">Enter Your Details</h1>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="" placeholder="Name" className="form-control" {...register('group_name', { required: true })} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="">Email ID</label>
                                        <input type="email" name="" placeholder="Email ID" className="form-control" {...register('group_emailid', { required: true })} />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="">Contact Number</label>
                                        <PhoneInputWithCountry name="group_phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="">Destination Date & Flight</label>
                                        <input type="date" name="" id="" min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0')} className="form-control" {...register('group_flightDate', { required: true })} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="">Adults</label>
                                        <select className="form-control" {...register("group_Adult", { required: true })}>
                                            <option defaultValue="1">1</option>
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
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="">Child</label>
                                        <select className="form-control" {...register("group_Child", { required: true })}>
                                            <option defaultValue="1">1</option>
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
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="">Infant</label>
                                        <select className="form-control" {...register("group_Infant", { required: true })}>
                                            <option defaultValue="1">1</option>
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
                                <div className="col-12">
                                    <div className="form-group d-flex gap-2">
                                        <input type="checkbox" id="group_termsPolicy" name="vehicle1" value="Bike" {...register("group_termsPolicy", { required: true })} />
                                        <label htmlFor="group_termsPolicy"> I Accept <Link to={'/privacypolicy'} target={'_blank'}> Privacy Policy & Terms </Link> </label>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' hidden id='submitbutton'>Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
