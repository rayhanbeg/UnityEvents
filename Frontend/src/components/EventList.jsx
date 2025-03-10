import React from "react";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{event.title}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">📅 Date:</span> {event.date}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">📍 Location:</span> {event.location}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">🏷️ Category:</span> {event.category}
          </p>
          <button
            onClick={() => deleteEvent(event._id)}
            className="w-full bg-red-500 text-white font-medium px-5 py-2 rounded-xl hover:bg-red-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            🗑️ Delete Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
