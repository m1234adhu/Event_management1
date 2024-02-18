// src/EventForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css';

const EventForm = ({ onEventAdd }) => {
	const [newEvent, setNewEvent] =
		useState({ title: '', date: '', reminder: false });

	const handleInputChange = (e) => {
		setNewEvent(
			{
				...newEvent,
				[e.target.name]: e.target.value
			}
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Create a new event
		axios.post('http://localhost:5000/api/events', newEvent)
			.then(response => {
				onEventAdd(response.data);
				setNewEvent({ title: '', date: '', reminder: false });
			})
			.catch(error => console.error(error));
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Title:</label>
			<input type="text" name="title"
				value={newEvent.title}
				onChange={handleInputChange} required />
			<label>Date:</label>
			<input type="date"
				name="date" value={newEvent.date}
				onChange={handleInputChange} required />

			<button type="submit">Add Event</button>
		</form>
	);
};
export default EventForm;
