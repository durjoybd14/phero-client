import React from "react";
import { Card } from "react-bootstrap";

const BlogsContent = (props) => {
  const { title, description, img, link, date } = props.blog;
  return (
    <div className="col-lg-4 col-md-6 mt-5 animation">
      <Card
        className="shadow-lg"
        style={{ height: "30rem", backgroundColor: "#fafafa" }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "15rem", padding: "10px" }}
        />
        <Card.Body>
          <Card.Title className=" text-center">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="mt-3 card-footer text-dark d-flex justify-content-around align-items-center">
          <p>
            <a
              className="text-decoration-none"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-plus-square" aria-hidden="true" /> Read More
            </a>
          </p>
          <p>Date: {date}</p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BlogsContent;
