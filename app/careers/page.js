"use client";

import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";

import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", resume: "" });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(11, 119, 180, 0.1)",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
  };

  return (
    <>
      <Head>
        <title>Careers at MFSemi LLC</title>
        <meta name="description" content="Join our team at MFSemi LLC." />
      </Head>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <section className="careers">
        <h1>Careers</h1>
        <h2>Current Openings</h2>
        <div className="job-listings">
          <div className="job">
            <h3>Senior Quantum Engineer</h3>
            <p>
              We are seeking an innovative mind to lead our quantum research
              team. Requirements include experience in advanced semiconductor
              design and quantum theory.
            </p>
          </div>
          <div className="job">
            <h3>Electronics Design Specialist</h3>
            <p>
              Join our creative team to push the boundaries of modern
              electronics. Applicants should have a flair for unconventional
              design and a passion for the future.
            </p>
          </div>
        </div>
        <h2>Apply Now</h2>
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
            Email:
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
            Resume (URL):
            <input
              type="text"
              name="resume"
              value={form.resume}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </>
  );
}
