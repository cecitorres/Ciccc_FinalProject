import React from 'react';
import './App.scss';
import Header from './components/Header';
import RoomCarousel from './components/RoomCarousel';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RoomCarousel />
    </div>
  )
}

export default App
