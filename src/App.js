import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Booking from './pages/booking';
import AboutUs from './pages/aboutus';
import Navbar from "./components/Navbar";
import 'antd/dist/antd.css';
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/aboutus" component={AboutUs} /> 
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
