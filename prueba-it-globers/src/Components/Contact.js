import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input
                   id="email"
                   type="email" 
                   name="email"
                   placeholder='Ingresa tu email'
                />
                <ValidationError 
                   prefix="Email" 
                   field="email"
                   errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                   <img src="https://i.imgur.com/yeIiham.png" alt="flecha a la derecha"></img>
                </button>
            </fieldset>
        </form>
  );
}
export default Contact;