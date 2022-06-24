import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const BookingList = () => {
  const [customerInfo, setCustomerInfo] = useState([]);

  const getCustomerData = async () => {
    await axios
      .get("http://localhost:2000/api/v1/bookings")
      .then((res) => {
        setCustomerInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  console.log(customerInfo);

  return (
    <div className="h-100 p-3">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Status</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {customerInfo.map((info, index) => (
          <tr key={info._id}>
            <td>{index + 1}</td>
            <td>{info.contact?.fullName}</td>
            <td>{info.contact?.email}</td>
            <td>{info.startDate.substring(0, 10)}</td>
            <td>{info.endDate.substring(0, 10)}</td>
            <td>{info.status}</td>
            <td>{info.totalPrice} CAD</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingList;
