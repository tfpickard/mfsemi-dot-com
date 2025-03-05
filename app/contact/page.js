"use client";
import React, { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <>
      <Head>
        <title>Kontakt MFSemi LLC</title>
        <meta name="description" content="Kontaktieren Sie MFSemi LLC." />
      </Head>
      <section className="contact">
        <h1>Kontaktieren Sie uns</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Nachricht:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <br />
          <button type="submit">Nachricht senden</button>
        </form>
        <div className="company-info">
          <h2>MFSemi LLC</h2>
          <p>1234 Halbleiter Allee</p>
          <p>Moskau, RU</p>
          <p>E-Mail: info@mfsemi.com</p>
          <p>Telefon: +7 495 123 4567</p>
        </div>
      </section>
    </>
  );
}
