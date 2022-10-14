/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import swal from "sweetalert";
const Contact = () => {
  const initialState = {
    names: "",
    email: "",
  };
  const [state, setState] = useState(initialState);
  const { names, email } = state;

  /* Validations */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (names === "" || email === "") {
      swal("Oops", "Fields cannot be empty...", "error");
    } else {
      swal("Good!", "We will contact you shortly!", "success");
    }
    setState(initialState);
  };
  /* ------- */

  const handleChange = (e) => {
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact">
      <div className="form-contact">
        <section className="title-contact">
          <h2>Do you have any doubt? </h2>
          <h4>Contact us!</h4>
        </section>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="names"
            placeholder="Jon Perez"
            autoComplete="off"
            onChange={handleChange}
            value={names}
          />
          <input
            type="email"
            name="email"
            placeholder="example@contact.com"
            autoComplete="off"
            onChange={handleChange}
            value={email}
          />
          <button className="btn-form">Send</button>
          <Link to="/"> Back </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;
