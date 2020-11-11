import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Moment from "react-moment";
import { Card, Row, Col } from "react-bootstrap";

const Event = ({ item }) => {
  const { removeEvent, findEvent, handleShow } = useContext(AppContext);

  const dateToday = Date.now();
  const dateOfEvent = Date.parse(item.date);
  const diffDays = Math.ceil((dateOfEvent - dateToday) / (1000 * 60 * 60 * 24));

  return (
    <Card
      style={{
        boxShadow: "rgb(255 255 255) 0px 0px 7px",
        margin: "1rem 1rem",
        borderRadius: "17px",
        textAlign: "center",
        padding: "4px",
        backgroundColor: "#343a40",
        fontSize: "0.95rem",
        color: "white",
      }}
    >
      <Row
        style={{
          padding: "5px 0px",
          borderRadius: "25px 0px 15px",
          boxShadow: "0px 0px 4px white",
          width: "98%",
          margin: "5px auto",
        }}
      >
        <Col
          onClick={() => alert("Days until the event: " + diffDays)}
          className="text-center"
          xs={2}
        >
          {diffDays === 0 ? (
            <i className="fas fa-battery-empty text-danger"></i>
          ) : diffDays < 5 ? (
            <i className="fas fa-battery-half text-warning"></i>
          ) : (
            <i className="fas fa-battery-full text-success"></i>
          )}
        </Col>

        <Col className="text-center font-weight-bold" xs={8}>
          <Moment format="ddd, DD. MMM YYYY.">{item.date}</Moment>
        </Col>

        <Col className="text-center" xs={2}>
          <div className="d-inline" onClick={handleShow}>
            <i
              onClick={() => findEvent(item.id)}
              className="fas fa-pen-nib text-primary"
            ></i>
          </div>
          <div className="d-inline">
            <i
              onClick={() => removeEvent(item.id)}
              className="fas fa-trash text-danger pl-2"
            ></i>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          padding: "5px 0px",
          borderRadius: "0px 5px 10px 15px",
          boxShadow: "0px 0px 4px white",
          width: "98%",
          margin: "5px auto",
        }}
        className="py-1"
      >
        <Col xs={2} className="text-center align-self-center">
          {diffDays}
        </Col>
        <Col
          style={{
            borderLeft: "1px solid rgb(255 255 255 / 15%)",
          }}
          className="text-justify"
        >
          {item.text}
        </Col>
      </Row>
    </Card>
  );
};

export default Event;
