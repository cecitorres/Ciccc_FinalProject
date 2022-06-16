import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import RoomCarousel from './components/home/RoomCarousel';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RoomCarousel />
      <Footer />
    </div>
  )
}

export default App
