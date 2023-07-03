import React from "react";
import { Link } from "react-router-dom";
import "../../styles/movies.css";
import "../../styles/contact.css";
import Arrow from "./svg/Arrow";

const ContactForm = ({ handleSubmit, handleChange, names, email }) => {
  return (
    <>
      <article className="form-contact">
        <section className="title-contact">
          <h2>Do you have any doubt? </h2>
          <h3>Contact us!</h3>
        </section>

        <form action="" onSubmit={handleSubmit} method="post">
          <label htmlFor="names">
            <input
              type="text"
              name="names"
              placeholder="Jon Perez"
              onChange={handleChange}
              value={names}
              required
              aria-required="true"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="example@contact.com"
              onChange={handleChange}
              value={email}
              required
              aria-required="true"
            />
          </label>
          <button type="submit" className="btn-form">
            Send
          </button>
          <Link to="/">
            {" "}
            <Arrow />{" "}
          </Link>
        </form>
      </article>
    </>
  );
};

export default ContactForm;
