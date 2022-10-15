import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Contact.module.css";

function Contact() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className={styles.btnInput}>
                <input className={styles.input}
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
                <button className={styles.button} type="submit" disabled={state.submitting}>
                   <img className={styles.iconoFlecha} src="https://i.imgur.com/yeIiham.png" alt="flecha a la derecha"></img>
                </button>
                </div>
            </fieldset>
        </form>
  );
}
export default Contact;