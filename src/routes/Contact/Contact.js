/* eslint-disable no-undef */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.js";
import swal from "sweetalert";
import { app } from "../../firebase/credentials";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initialState } from "../../initialValues/initialState";
import ContactForm from "./ContactForm";

const Contact = () => {
  const navigate = useNavigate();
  //inicio db
  const db = getFirestore(app);

  const [state, setState] = useState(initialState);
  const { names, email } = state;

  /* Validations */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (names === "" || email === "") {
      swal("Oops", "Fields cannot be empty...", "error");
    } else {
      try {
        await addDoc(collection(db, "usuarios"), {
          name: names,
          email: email
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
    <div className="contact">
      <ContactForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        names={names}
        email={email}
      />
    </div>
  );
};

export default Contact;
