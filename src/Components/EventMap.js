import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Event from "./Event";

const EventMap = () => {
  const { events } = useContext(AppContext);
  return (
    <div>
      {events.length ? (
        <div>
          {events.map((item) => (
            <Event item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="pt-3 h5 text-center text-light" id="empy-events">
          <div className="p-4">No Events</div>
          <i className="fas fa-thumbs-up fa-4x p-5"></i>
        </div>
      )}
    </div>
  );
};

export default EventMap;
