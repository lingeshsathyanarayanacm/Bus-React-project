import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link, Redirect } from 'react-router-dom'
import './Tab.css';
export default function SeatSelection() {
    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])

    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        window.alert('Seat Confirmed.')
        window.location.href = "/login"

        // console.log(seatNumber)
        // console.log(name)
        // console.log(gender)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <div>
                    <form key={idx} className="form seatfrm">
                        <p className="text-capitalize text-center">Seat No:{seat}</p>
                        <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                            <label className="form-check-label" for="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </form>
                </div>)

        })
    }
    return (
        <div> <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="/book/menu1">Select Seat</a>
                </li>
                
            </ul>
        </div>
            <div className="ss">
                <div className="row">
                    <div className="column1">
                        <div className="plane">
                            <form onChange={e => getSeatNumber(e)}>
                                <ol className="cabin fuselage">
                                    <li className="row row--1">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" disabled value="1A" id="1A" />
                                                <label htmlFor="1A">1A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" id="1B" value="1B" />
                                                <label htmlFor="1B">1B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="1C" id="1C" />
                                                <label htmlFor="1C">1C</label>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="row row--2">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" disabled value="2A" id="2A" />
                                                <label htmlFor="2A">2A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="2B" id="2B" />
                                                <label htmlFor="2B">2B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="2C" id="2C" />
                                                <label htmlFor="2C">2C</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--3">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" value="3A" id="3A" />
                                                <label htmlFor="3A">3A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="3B" id="3B" />
                                                <label htmlFor="3B">3B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="3C" id="3C" />
                                                <label htmlFor="3C">3C</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--4">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" disabled value="4A" id="4A" />
                                                <label htmlFor="4A">4A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="4B" id="4B" />
                                                <label htmlFor="4B">4B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="4C" id="4C" />
                                                <label htmlFor="4C">4C</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--5">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" value="5A" id="5A" />
                                                <label htmlFor="5A">5A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="5B" id="5B" />
                                                <label htmlFor="5B">5B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="5C" id="5C" />
                                                <label htmlFor="5C">5C</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--6">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" disabled value="6A" id="6A" />
                                                <label htmlFor="6A">6A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="6B" id="6B" />
                                                <label htmlFor="6B">6B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" value="6C" id="6C" />
                                                <label htmlFor="6C">6C</label>
                                            </li>

                                        </ol>
                                    </li>
                                    <li className="row row--7">
                                        <ol className="seats" type="A">
                                            <li className="seat">
                                                <input type="checkbox" value="7A" id="7A" />
                                                <label htmlFor="7A">7A</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="7B" id="7B" />
                                                <label htmlFor="7B">7B</label>
                                            </li>
                                            <li className="seat">
                                                <input type="checkbox" disabled value="7C" id="7C" />
                                                <label htmlFor="7C">7C</label>
                                            </li>

                                        </ol>
                                    </li>
                                   
                                </ol>
                            </form>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="seatInfo">
                            <form className="form-group">
                                {renderPassengerData(seatNumber)}
                            </form>
                            <div>
                                <button onClick={e => handleSubmitDetails(e)} className="btn btn-primary">
                                    Confirm Details
                                </button>
                            </div>
                            <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>

    )
}
