import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { eventlist } from "../store/eventlist";

function EventDesc() {
  const { id } = useParams();
  const event = eventlist.find((e) => e.name.toLowerCase() === id.toLowerCase());
  const [selectedImage, setSelectedImage] = useState(null); 

  if (!event) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Event not found!
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto mt-10">
      {/* Event Title */}
      <h1 className="text-3xl font-bold text-center mb-6">{event.name}</h1>

      {/* Main Event Image */}
      <img
        src={event.url}
        alt={event.name}
        className="w-full h-[500px] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 sm:h-[400px] md:h-[450px]"
      />

      {/* Event Details */}
      <p className="text-lg text-gray-700 mt-4 mb-6 text-justify">
        {event.details || "Details coming soon..."}
      </p>

      {/* Event Images Gallery */}
      {event.images.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {event.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${event.name} - ${index}`}
                className="w-48 h-32 object-cover rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform sm:w-40 sm:h-28 md:w-48 md:h-36"
                onClick={() => setSelectedImage(img)} 
              />
            ))}
          </div>
        </>
      )}

      {/* No Images Available */}
      {event.images.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No images available.</p>
      )}

      {/* Modal for Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="mt-10 text-center">
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default EventDesc;
