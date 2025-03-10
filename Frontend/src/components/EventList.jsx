import React from 'react';

const EventList = ({ events, deleteEvent }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <div
          key={event._id}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Date:</span> {event.date}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Location:</span> {event.location}</p>
          <p className="text-gray-600 mb-4"><span className="font-semibold">Category:</span> {event.category}</p>
          <button
            onClick={() => deleteEvent(event._id)}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;