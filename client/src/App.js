import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authForm/Login";
import Signup from "./components/authForm/Signup";
import BookingPage from "./components/booking/BookingPage";
import Payment from "./components/booking/Payment";
import Contact from "./components/contact/Contact";
import SuggestMsgLogin from "./components/authForm/SuggestMsgLogin";

const App = () => {
  const [name, setName] = useState(() => JSON.parse(localStorage.getItem("name")) || "");
  
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  console.log(name);

  return (
    <Router>
    <div className="App">
      <Header setName={setName} />
      <Routes>
        <Route exact path="/" element={<Home name={name} />} />
        <Route path="/suggest_login" element={<SuggestMsgLogin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={<Signup name={name} setName={setName} />}
        />
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
