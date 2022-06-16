import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import GuestRoom from './components/home/GuestRoom';
import RoomCarousel from './components/home/RoomCarousel';
import SearchForBook from './components/home/SearchForBook';
import Service from './components/home/Service';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RoomCarousel />
      <SearchForBook />
      <GuestRoom />
      <Service />
      <Footer />
    </div>
  )
}

export default App
