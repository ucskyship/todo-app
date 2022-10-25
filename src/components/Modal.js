import React from 'react'
import {useState} from 'react'

const Modal = () => {
    const [event, setEvent] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    return (
        <div>
            <input className="event" onChange={e => setEvent(e.target.value) } placeholder="enter todo" />
            <input className="date-time" onChange={d => setDate(d.target.value) } placeholder="event date"/>
            <input className="date-time" onChange={t=> setTime(t.target.value) } placeholder="event time"/>

            <button> Submit </button>
        </div>
    )
}

export default Modal
