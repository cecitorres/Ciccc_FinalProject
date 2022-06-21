import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authForm/Login";
import Signup from "./components/authForm/Signup";
import AvailableRoom from "./components/availableRoom/AvailableRoom";
import BookingPage from "./components/booking/BookingPage";
import Payment from "./components/booking/Payment";
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/available_room" element={<AvailableRoom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
