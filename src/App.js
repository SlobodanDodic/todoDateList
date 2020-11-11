import React from "react";
import AppProvider from "./Context/AppContext";
import EventNavbar from "./Components/EventNavbar";
import EventMap from "./Components/EventMap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AppProvider>
      <EventNavbar />
      <br />
      <br />
      <EventMap />
    </AppProvider>
  );
}

export default App;
