import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authForm/Login";
import Signup from "./components/authForm/Signup";
import BookingPage from "./components/booking/BookingPage";
import Contact from "./components/contact/Contact";
import SuggestMsgLogin from "./components/authForm/SuggestMsgLogin";
import BookingList from "./components/admin/BookingList";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [name, setName] = useState(
    () => JSON.parse(localStorage.getItem("name")) || ""
  );
  // Booking data
  const [bookingInfo, setBookingInfo] = useState([]);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  // Monday, July 4, 2022
  return (
    <Router>
      <div className="App">
        <Header setName={setName} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home name={name} setBookingInfo={setBookingInfo} />}
          />
          <Route path="/suggest_login" element={<SuggestMsgLogin />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={<Signup name={name} setName={setName} />}
          />
          <Route
            path="/booking"
            element={<BookingPage bookingInfo={bookingInfo} />}
          />

          <Route
            path="/bookinglist"
            element={
              <ProtectedRoute>
                <BookingList />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/bookings" element={<BookingList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
