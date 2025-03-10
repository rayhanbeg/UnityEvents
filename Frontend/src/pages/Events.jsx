import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, [API_BASE_URL]);

  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/events`, newEvent);
      setEvents([...events, response.data]);
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error adding event:', err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Event Listing</h1>
        <div className="flex justify-between items-center mb-8">
          <div>
            <label className="mr-2 font-semibold text-gray-700">Filter by Category:</label>
            <select
              className="p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Event
          </button>
        </div>

        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg font-semibold">
            No events found. Please add a new event.
          </p>
        ) : (
          <EventList events={filteredEvents} deleteEvent={deleteEvent} />
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Event</h2>
            <EventForm addEvent={addEvent} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;