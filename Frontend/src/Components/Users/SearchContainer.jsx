import React from 'react'
import { City } from 'country-state-city'
import { Container } from 'react-bootstrap'
import '../../Css/Search.css'

export default function SearchContainer() {
    let CityList = City.getCitiesOfCountry('IN')

    return (
        <Container>
            <div class="select_box">
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Origin</label>
                        <select name="cars" id="cars" class="form-control">
                            {
                                CityList.map((CityList) => (
                                    <option key={CityList.countryCode} value={CityList.name}>{CityList.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Destination</label>
                        <select name="cars" id="cars" class="form-control">
                            {
                                CityList.map((CityList) => (
                                    <option key={CityList.countryCode} value={CityList.name}>{CityList.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Depture Date</label>
                        <input type="date" name="" id="" class="form-control" />
                    </div>
                </div>
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Adults</label>
                        <select name="" id="cars" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Children</label>
                        <select name="" id="cars" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
                <div class="slect_items">
                    <div class="select_from">
                        <label for="">Infant</label>
                        <select name="cars" id="cars" class="form-control">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div class="slect_items">
                    <button class="search_btn">search</button>
                </div>
            </div>
        </Container>
    )
}
