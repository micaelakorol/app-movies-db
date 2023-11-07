import React, { useState } from "react";
import "../../../styles/movies.css";
import "../../../styles/contact.css";
import SendMessage from "../Functions/SendMessage";
import { fields } from "../Functions/InitialFields";
import { handleChange } from "../Functions/handleChange";
import InputContact from "../../../reusable/InputContact";
import Textarea from "./Elements/Textarea";
import SendButton from "./Elements/SendButton";

const ContactForm = () => {
  const [fieldEmail, setFieldEmail] = useState(fields);
  const { email, yourName, message } = fieldEmail;
  const { handleSubmitMessage } = SendMessage(fieldEmail, setFieldEmail);

  return (
    <>
      <article className="form-contact">
        <section className="title-contact">
          <h2>Do you have any doubt? </h2>
          <h3>Contact us!</h3>
        </section>
        <form action="" onSubmit={handleSubmitMessage} method="post">
          <InputContact
            type="text"
            name="yourName"
            placeholder="John Perez"
            onChange={(e) => handleChange(e, setFieldEmail)}
            value={yourName}
          />
          <InputContact
            type="email"
            name="email"
            placeholder="example@contact.com"
            onChange={(e) => handleChange(e, setFieldEmail)}
            value={email}
          />
          <Textarea
            handleChange={handleChange}
            setFieldEmail={setFieldEmail}
            message={message}
          />
          <SendButton />
        </form>
      </article>
    </>
  );
};

export default ContactForm;
