"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
//import Smooth3DObject from "../components/Smooth3DObject";
//import LorenzAttractor from "../components/LorenzAttractor";
const LorenzAttractor = dynamic(() => import("../components/LorenzAttractor"));
const Smooth3DObject = dynamic(() => import("../components/Smooth3DObject"));
const Fusion = dynamic(() => import("../components/Fusion"));

export default function Demo() {
  const [stats, setStats] = useState({ quantum: 0, flux: 0, metric: 0 });

  // Rössler Attractor parameters
  const a = 1.2,
    b = 1.2,
    c = 5.7;
  let x = Math.random(),
    y = Math.random(),
    z = Math.random();
  const dt = 0.01;

  // Simulate live stats update using Rössler Attractor
  useEffect(() => {
    const interval = setInterval(() => {
      // Rössler Attractor equations
      const dx = -y - z;
      const dy = x + a * y;
      const dz = b + z * (x - c);
      x += dx * dt;
      y += dy * dt;
      z += dz * dt;

      // Check for NaN and reset if necessary
      if (isNaN(x) || isNaN(y) || isNaN(z)) {
        x = Math.random();
        y = Math.random();
        z = Math.random();
      }

      setStats({
        quantum: (Math.abs(x) * 100).toFixed(6).padStart(19, "0"), // Scale for display
        flux: (Math.abs(y) * 100).toFixed(6).padStart(19, "0"), // Scale for display
        metric: (Math.abs(z) * 100).toFixed(6).padStart(19, "0"), // Scale for display
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Live Demo - MFSemi LLC Flagship Product</title>
        <meta
          name="description"
          content="Live quantum stats and Lorenz Attractor visualization demo."
        />
      </Head>
      <section className="demo">
        <h1>Flagship Product Live Demo</h1>
        <div className="stats">
          <p className="flux-stats">Flux Entropy: {stats.quantum}</p>
          <p className="flux-stats">Flux Intensity: {stats.flux}</p>
          <p className="flux-stats">Metric: {stats.metric}</p>
        </div>
        <div className="attractor">
          <Smooth3DObject />
        </div>
        <div className="attractor">
          <Fusion />
        </div>
        <div className="attractor">
          <LorenzAttractor />
        </div>
      </section>
    </>
  );
}
