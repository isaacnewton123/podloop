"use client";

import { useActionState } from "react";
import styles from "../styles/page-common.module.css";
import { submitContact } from "./actions";

function TextField({
  id, name, label, type = "text", placeholder, required = false,
}: {
  id: string; name: string; label: string; type?: string;
  placeholder: string; required?: boolean;
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={styles.formInput}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    message: "",
    error: "",
  });

  if (state.success) {
    return (
      <div className={styles.formSuccess} style={{ padding: "40px 24px", textAlign: "center" }}>
        <h3 className="display-sm" style={{ marginBottom: 12 }}>Message Sent!</h3>
        <p>{state.message}</p>
        <button
          className="btn-primary"
          style={{ marginTop: 24 }}
          onClick={() => window.location.reload()}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form action={formAction}>
      <TextField id="ct-name" name="name" label="Name" placeholder="Your full name" required />
      <TextField id="ct-email" name="email" label="Email" type="email" placeholder="you@example.com" required />
      <TextField id="ct-subject" name="subject" label="Subject" placeholder="How can we help?" />
      <div className={styles.formGroup}>
        <label htmlFor="ct-message" className={styles.formLabel}>
          Message
        </label>
        <textarea
          id="ct-message"
          name="message"
          className={styles.formTextarea}
          placeholder="Tell us more..."
          required
        />
      </div>
      
      {state.error && <p className={styles.formError} style={{ marginBottom: 16 }}>{state.error}</p>}
      
      <button
        type="submit"
        className={`btn-primary ${styles.formSubmit}`}
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
