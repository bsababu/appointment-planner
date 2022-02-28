import React, { useEffect } from "react";
import {useState} from 'react'
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import {TileList} from '../../components/tileList/TileList.js';

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact]  = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact({});
    setDate('');
    setTime('');
  };

  useEffect(()=> {
    for(const appointment of props.appointments) {
      if (appointment.date === date && appointment.time === time) {
        alert('Appointment is already booked.');
      }
    }

  }, [props.appointments, date, time])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts = {props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list = {props.appointments} />
      </section>
    </div>
  );
};
