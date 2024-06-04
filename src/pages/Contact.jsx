import '../styles/styles.css';
import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
  const [state, handleSubmit] = useForm("mvojddeg");
  if (state.succeeded) {
    return <h1>Thank you for your message! I will get back to you soon.</h1>;
  }
  return (
    <form id="fs-form" name="simple-contact-form" accept-charset="utf-8" onSubmit={handleSubmit}>
      <fieldset id="fs-frm-inputs"></fieldset>
      <label for="full-name">Name:</label>
      <input id="full-name" type="name" name="name" />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Message:</label>
      <textarea rows="8" id="message" name="message" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button id="submit" type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
 
}


