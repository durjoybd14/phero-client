import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import ProcessPayment from "../../Dashboard/Book/ProcessPayment";
const SelectedTickets = (props) => {
  const [pay, setPay] = useState("d-none");
  const countTicket = props.countTicket;
  const SelectedTickets = countTicket.reduce(
    (sum, ticket) => sum + ticket.name + " , ",
    []
  );
  const totalBudget = countTicket.reduce(
    (sum, ticket) => sum + parseInt(ticket.cost),
    0
  );

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [shippingData, setshippingData] = useState(null);

  const onSubmit = (data) => {
    setshippingData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      ...shippingData,
      paymentId,
      cost: { totalBudget },
      ticketInfo: countTicket,
      orderTime: new Date().toDateString(),
    };

    fetch("https://still-taiga-92318.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderDetails: orderDetails,
        email: loggedInUser.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("YAY! Your Order Placed Successfully");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <h6>Dhaka to Kalkata</h6>
      <div className="card p-3 rounded">
        <div className="card-body">
          <h5 className="card-title">
            You booked {countTicket.length} tickets
          </h5>
          <p className="card-text">Total Cost: ${totalBudget} </p>
          <p>Selected tickets:</p>
          <p>{SelectedTickets}</p>
          <button
            className="btn btn-primary"
            onClick={() => setPay(pay ? "d-block" : "d-none")}
          >
            Pay Now
          </button>
        </div>
      </div>
      <div className={pay}>
        <div
          style={{ display: shippingData ? "none" : "block" }}
          className="col-lg-6"
        >
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                name="userName"
                defaultValue={loggedInUser.userName}
                className="form-control"
                {...register("userName", { required: true })}
                placeholder="Your Name"
              />
              {errors.userName && (
                <span className="error text-danger">Name is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="email"
                defaultValue={loggedInUser.email}
                className="form-control"
                {...register("email", { required: true })}
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="error text-danger">Email is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="address"
                className="form-control"
                {...register("address", { required: true })}
                placeholder="Your Address"
              />
              {errors.address && (
                <span className="error text-danger">Address is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="phone"
                className="form-control"
                {...register("phone", { required: true })}
                placeholder="Your Phone Number"
              />
              {errors.phone && (
                <span className="error text-danger">
                  Phone Number is required
                </span>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          style={{ display: shippingData ? "block" : "none" }}
          className="col-lg-6 mt-3"
        >
          <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default SelectedTickets;
