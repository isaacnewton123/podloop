"use client";

import { useActionState } from "react";
import { joinWaitlist, type ActionState } from "./actions";
import styles from "../styles/page-common.module.css";

const initialState: ActionState = { success: false, message: "", error: "" };

function WaitlistSuccess({ message }: { message: string }) {
  return (
    <div className={`${styles.formCard} ${styles.formSuccess}`}>
      <h2 className={`display-sm ${styles.formSuccessTitle}`}>
        🎉 You're in!
      </h2>
      <p className={styles.formSuccessText}>{message}</p>
    </div>
  );
}

function WaitlistFields({ isPending }: { isPending: boolean }) {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="wl-name" className={styles.formLabel}>Your name</label>
        <input
          id="wl-name"
          name="name"
          type="text"
          className={styles.formInput}
          placeholder="Jane Smith"
          required
          disabled={isPending}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="wl-email" className={styles.formLabel}>Email address</label>
        <input
          id="wl-email"
          name="email"
          type="email"
          className={styles.formInput}
          placeholder="jane@podcast.fm"
          required
          disabled={isPending}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="wl-show" className={styles.formLabel}>Podcast name (optional)</label>
        <input
          id="wl-show"
          name="show"
          type="text"
          className={styles.formInput}
          placeholder="The Creator Lab"
          disabled={isPending}
        />
      </div>
    </>
  );
}

export default function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState);

  if (state.success) {
    return <WaitlistSuccess message={state.message || "Success!"} />;
  }

  return (
    <form action={formAction}>
      {state.error && <div className={styles.formError}>{state.error}</div>}
      <WaitlistFields isPending={isPending} />
      <button type="submit" className={`btn-primary ${styles.formSubmit}`} disabled={isPending}>
        {isPending ? "Joining..." : "Join the Waitlist"}
      </button>
    </form>
  );
}
