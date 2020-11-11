import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const EventProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("listEvents")) || [];

  const [events, setEvents] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("listEvents", JSON.stringify(events));
  }, [events]);

  const [editEvent, setEditEvent] = useState(null);

  const addEvent = (event) => {
    setEvents([
      ...events,
      {
        text: event.text.charAt(0).toUpperCase() + event.text.slice(1),
        date: event.date,
        id: event.id,
      },
    ]);
  };

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const findEvent = (id) => {
    const eventItem = events.find((event) => event.id === id);
    setEditEvent(eventItem);
  };

  const updateEvent = (text, date, id) => {
    const newEvents = events.map((event) =>
      event.id === id ? { text, date, id } : event
    );
    setEvents(newEvents);
    setEditEvent(null);
  };

  events.sort(function (a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <AppContext.Provider
      value={{
        events,
        addEvent,
        removeEvent,
        editEvent,
        findEvent,
        updateEvent,
        show,
        handleClose,
        handleShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default EventProvider;
