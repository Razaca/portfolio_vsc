"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";

const FormContact = () => {
  const form = useRef();


  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b50dnmk", //service ID
        "template_3suqlop", //template ID
        form.current,
        "tKDoEw6lm9HKfukla" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("ok");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  }

  return (
    <div className={styles.formContact}>
      <form ref={form} className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h3>Or Fill Out This Form</h3>
        <div className={styles.dataUser}>
          <div className={styles.contInput}>
            <label htmlFor="name">name:</label>
            <input
              name="name"
              type="text"
            />
          </div>

          <div className={styles.contInput}>
            <label htmlFor="email">email:</label>
            <input
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className={styles.contInput}>
          <label htmlFor="subject">subject:</label>
          <input
            name="subject"
            type="text"
          />
        </div>

        <div className={styles.contInput}>
          <label htmlFor="message">message:</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormContact;
