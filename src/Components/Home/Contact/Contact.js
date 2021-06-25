import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_73qb7cg",
        "template_oznqcux",
        e.target,
        "user_yHYAoZsap8fcwMhDqGTPM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="container p-5 mt-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 shadow rounded p-5 contact-bg">
          <h3 className="text-center">Leave Your Message</h3>
          <form className="contact-form mt-5" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              className="form-control mb-3"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              rows={3}
              className="form-control mb-3"
              placeholder="Message"
              required
            />
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary mb-4"
              style={{ width: "100%" }}
            />
          </form>
          <p className="fst-italic">
            Sending to{" "}
            <a href="mailto:airticket@gmail.com">airticket@gmail.com</a>
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </section>
  );
};

export default Contact;
