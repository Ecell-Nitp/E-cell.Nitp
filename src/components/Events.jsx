import React from "react";
import { eventlist } from "../store/eventlist";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div id="events" className="flex flex-col items-center space-y-6 mt-20">
      <h1 className="text-2xl font-semibold">Past Events Organised</h1>
      <h2 className="text-lg text-center text-gray-600">
        Get a glimpse into our series of events
      </h2>
      <div className="flex flex-wrap w-full justify-between">
        {eventlist.map((e, index) => (
          <div
            key={index}
            className="w-[90%] border  md:w-[30%] m-3 bg-white rounded-lg shadow-md hover:shadow-xl  object-cover overflow-hidden"
          >
            <img
              src={e.url}
              alt="Event"
              className="w-[100%] h-[80%] object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-medium">{e.name}</p>
              <Link
                to={`/event/${e.name}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                more info..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
