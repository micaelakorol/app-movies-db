import React from "react";

const Textarea = ({ handleChange, setFieldEmail, message }) => {
  return (
    <textarea
      name="message"
      id="message"
      cols="38"
      rows="5"
      placeholder="Your message here.."
      className="message"
      required
      onChange={(e) => handleChange(e, setFieldEmail)}
      value={message}
    />
  );
};

export default Textarea;
