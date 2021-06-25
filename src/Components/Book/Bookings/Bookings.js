import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectedTickets from "../SelectedTickets/SelectedTickets";
import Tickets from "../Tickets/Tickets";

const Bookings = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch("https://still-taiga-92318.herokuapp.com/alltickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  const [countTicket, setCountTicket] = useState([]);

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
        <Link to="/dhakatokalkata">Dhaka to Kalkata</Link>{" "}
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <header>
            <h2>Dhaka to Chottogram</h2>
            <p>EC-Economy Class. Price per ticket $52</p>
            <p>BC-Business Class. Price per ticket $60</p>
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

export default Bookings;
