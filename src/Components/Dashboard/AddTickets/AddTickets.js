import React from "react";
import { useForm } from "react-hook-form";
import SideBar from "../SideBar/SideBar";

const AddTickets = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const ticketsData = {
      name: data.name,
      cost: data.cost,
    };

    const url = `http://localhost:5000/addDhakaToKalkata`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketsData),
    }).then((res) => console.log("server response", res));
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <SideBar></SideBar>
      </div>
      <div className="col-md-5 mt-4 p-5">
        <h5>Add Service</h5>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue=""
              {...register("name", { required: true })}
              placeholder="Ticket Name"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="cost"
              className="form-control"
              defaultValue=""
              {...register("cost", { required: true })}
              placeholder="Ticket Price"
            />
            {errors.cost && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-5"></div>
    </div>
  );
};

export default AddTickets;
