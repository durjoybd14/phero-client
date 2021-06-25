import React from "react";

const NoMatch = () => {
  return (
    <section className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
          <h1>No Match Found</h1>
          <h3 className="text-danger">
            <i className="fa fa-frown-o" aria-hidden="true"></i> Status: 404{" "}
            <i className="fa fa-frown-o" aria-hidden="true"></i>
          </h3>
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
};

export default NoMatch;
