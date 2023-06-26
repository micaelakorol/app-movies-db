/* eslint-disable no-undef */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.js";
import swal from "sweetalert";
import { app } from "../../firebase/credentials.js";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initialState } from "../../initialValues/initialState.js";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
  const navigate = useNavigate();
  //initiation db
  const db = getFirestore(app);

  const [state, setState] = useState(initialState);
  const { names, email } = state;

  /* Validations + sending data to bbdd */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (names === "" || email === "")
      return swal("Oops", "Fields cannot be empty...", "error");
    else {
      try {
        await addDoc(collection(db, "usuarios"), {
          name: names,
          email: email,
        });
        setState(initialState);
        return swal("Thanks!", "Submitted form", "success");
      } catch (error) {
        alert(error);
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  /* ------- */
  const handleChange = (e) => {
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact">
      <ContactForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        names={names}
        email={email}
      />
    </section>
  );
};

export default Contact;
