import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contact.css";

const ContactForm = ({ handleSubmit, handleChange, names, email }) => {
  return (
    <>
      <article className="form-contact">
        <section className="title-contact">
          <h2>Do you have any doubt? </h2>
          <p>Contact us!</p>
        </section>

        <form action="" onSubmit={handleSubmit} method="post">
          <input
            type="text"
            name="names"
            placeholder="Jon Perez"
            onChange={handleChange}
            value={names}
            required
            aria-required='true'
          />
          <input
            type="email"
            name="email"
            placeholder="example@contact.com"
            onChange={handleChange}
            value={email}
            required
            aria-required='true'
          />
          <button type="submit" className="btn-form">Send</button>
          <Link to="/"> Back </Link>
        </form>
      </article>
    </>
  );
};

export default ContactForm;
