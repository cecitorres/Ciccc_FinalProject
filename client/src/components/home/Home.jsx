import React from 'react'
import GuestRoom from './GuestRoom';
import RoomCarousel from './RoomCarousel';
import SearchForBook from './SearchForBook';
import Service from './Service';

const Home = ({name, setBookingInfo}) => {
  return (
    <div>
      <RoomCarousel />
      <SearchForBook name={name} setBookingInfo={setBookingInfo} />
      <GuestRoom />
      <Service />
    </div>
  )
}

export default Home
