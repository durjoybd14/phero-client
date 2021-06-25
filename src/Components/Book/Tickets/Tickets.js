import React from "react";

const Tickets = (props) => {
 

  const { name } = props.ticket;
  const handleSelectedTicket = props.handleSelectedTicket;

  return (
    <div>
      <button
        onClick={() => handleSelectedTicket(props.ticket)}
        className="m-2 btn btn-success"
      >
        {name}
      </button>
    </div>
  );
};

export default Tickets;
