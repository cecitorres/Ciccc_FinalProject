import React from 'react'
import GuestRoom from './GuestRoom';
import RoomCarousel from './RoomCarousel';
import SearchForBook from './SearchForBook';
import Service from './Service';

const Home = () => {
  return (
    <div>
      <RoomCarousel />
      <SearchForBook />
      <GuestRoom />
      <Service />
    </div>
  )
}

export default Home
