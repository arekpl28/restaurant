"use client";

import { useState } from "react";
import classes from "./page.module.css";

export default function RegisterRestaurantPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    restaurantName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // Tu w przyszłości wyślesz dane do API /server action
    console.log("Form data:", form);
    alert("Restauracja zarejestrowana!");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.headerText}>Zarejestruj nową restaurację</h1>
      <p className={classes.subtitle}>
        Dołącz do naszej społeczności i pokaż światu swoje menu!
      </p>

      <form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.label}>
          Email
          <input
            type="email"
            className={classes.input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>

        <label className={classes.label}>
          Hasło
          <input
            type="password"
            className={classes.input}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </label>

        <label className={classes.label}>
          Nazwa Restauracji
          <input
            type="text"
            className={classes.input}
            value={form.restaurantName}
            onChange={(e) =>
              setForm({ ...form, restaurantName: e.target.value })
            }
            required
          />
        </label>

        <button type="submit" className={classes.button}>
          Zarejestruj
        </button>
      </form>
    </div>
  );
}
