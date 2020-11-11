import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
import Moment from "react-moment";
import { Button, Navbar, Form, Modal } from "react-bootstrap";

function EventNavbar() {
  const {
    events,
    addEvent,
    editEvent,
    updateEvent,
    show,
    handleClose,
    handleShow,
  } = useContext(AppContext);

  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editEvent === null) {
      const newEvent = {
        id: uuidv4(),
        text,
        date,
      };

      addEvent(newEvent);
      setText("");
      setDate("");
    } else {
      updateEvent(text, date, editEvent.id);
    }
  };

  useEffect(() => {
    if (editEvent !== null) {
      setText(editEvent.text);
      setDate(editEvent.date);
    } else {
      setText("");
      setDate("");
    }
  }, [editEvent]);

  const numberOfEvents = events.length;

  return (
    <Navbar
      style={{
        boxShadow: "0px 0px 3px white",
      }}
      fixed="top"
      bg="dark"
      variant="dark"
    >
      <div>
        <Button
          variant="outline-primary"
          onClick={handleShow}
          style={{ margin: "0 auto" }}
        >
          Add +
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body
            style={{
              backgroundColor: "rgb(25 53 142)",
            }}
          >
            <p
              style={{
                color: "white",
                borderBottom: "1px dotted rgb(255 255 255 / 0.44)",
              }}
            >
              Enter the event and a date:
            </p>

            <Form.Control
              required
              type="text"
              placeholder="Enter the event"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <br />
            <Form.Control
              required
              type="date"
              placeholder="Enter a date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: "rgb(25 53 142)",
            }}
          >
            <Button
              className="btn-block"
              variant={editEvent ? "success" : "outline-light"}
              type="submit"
              onClick={handleClose}
            >
              {editEvent ? "Edit Event" : "Add Event"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Moment
        style={{
          color: "yellow",
          margin: "auto",
          width: "50%",
          textAlign: "center",
          boxShadow: "rgb(18 18 18) 0px 1px 17px",
          borderRadius: "20px 0px",
        }}
        format="dddd, DD. MMM YYYY."
      >
        {Date.now()}
      </Moment>

      {numberOfEvents ? (
        <Button
          onClick={() => alert("Total number of events: " + numberOfEvents)}
          style={{ padding: "7px 25px" }}
          size="sm"
          variant="outline-success"
        >
          {numberOfEvents}
        </Button>
      ) : (
        <Button
          onClick={() => alert("No events")}
          style={{ padding: "7px 15px" }}
          size="sm"
          variant="outline-danger"
        >
          {numberOfEvents}
        </Button>
      )}
    </Navbar>
  );
}

export default EventNavbar;
