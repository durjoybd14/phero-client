import React from "react";
import { useEffect, useState } from "react";
import Tickets from "../Tickets/Tickets";
import SelectedTickets from "../SelectedTickets/SelectedTickets";
import { Link } from "react-router-dom";

const DhakaToKalkata = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/dhakaToKalkata")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  const [countTicket, setCountTicket] = useState([]);
  console.log(countTicket);
  const handleSelectedTicket = (ticketData) => {
    if (countTicket.indexOf(ticketData) === -1 && countTicket.length < 5) {
      const newCountTicket = [...countTicket, ticketData];
      setCountTicket(newCountTicket);
    } else {
      alert("you select more than 5tickets or this ticket already booked");
    }
  };

  return (
    <div className="container mt-5">
      <div className="py-3">
        <Link to="/bookings">Dhaka to Chottogrm</Link>{" "}
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <header>
            <h2>Dhaka to Kalkata</h2>
            <p>EC-Economy Class. Price per ticket $100</p>
            <p>BC-Business Class. Price per ticket $120</p>
            <p>NB: One persons cant's buy more than 5tickets at a time</p>
          </header>
          <h4>Available Tickets:</h4>
          <div className="d-flex flex-wrap">
            {tickets.map((ticket) => (
              <Tickets
                ticket={ticket}
                key={ticket._id}
                handleSelectedTicket={handleSelectedTicket}
              ></Tickets>
            ))}
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <SelectedTickets countTicket={countTicket}></SelectedTickets>
        </div>
      </div>
    </div>
  );
};

export default DhakaToKalkata;
