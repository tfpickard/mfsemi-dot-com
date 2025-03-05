"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function Products() {
  const [Letterize, setLetterize] = useState(null);

  useEffect(() => {
    import("letterizejs").then((module) => {
      setLetterize(() => module.default);
    });
  }, []);

  useEffect(() => {
    if (!Letterize) return;

    function scrambleText(element) {
      const originalText = element.innerText;
      const characters = [...originalText];

      // Generate scrambled characters (keep spaces intact)
      let scrambledArray = characters.map((char) => (char === " " ? " " : randomChar()));
      
      element.innerText = scrambledArray.join(""); // Display scrambled text

      // Generate random indices for unscrambling order
      let indices = characters.map((_, i) => i).sort(() => Math.random() - 0.5); // Shuffle indices

      setTimeout(() => {
        let unscrambleIndex = 0;
        const interval = setInterval(() => {
          if (unscrambleIndex < indices.length) {
            let idx = indices[unscrambleIndex];
            scrambledArray[idx] = characters[idx];
            element.innerText = scrambledArray.join("");
            unscrambleIndex++;
          } else {
            clearInterval(interval);
            element.innerText = originalText; // Ensure full restoration
          }
        }, 50); // Speed of unscrambling
      }, 500); // Delay before unscrambling starts
    }

    function randomChar() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    // Select all text-containing elements
    const textElements = Array.from(document.body.querySelectorAll("*"))
      .filter((el) => el.childNodes.length === 1 && el.innerText.trim() !== ""); // Ensure only elements with direct text

    textElements.forEach(scrambleText);
  }, [Letterize]);

  return (
    <>
      <Head>
        <title>MFSemi LLC - Products</title>
        <meta name="description" content="Explore our cutting-edge products." />
      </Head>
      <section className="products">
        <h1>Our Products</h1>
        <div className="product-list">
          <div className="product-item">
            <h2>Quantum Chip X-1</h2>
            <p>
              A revolutionary semiconductor chip engineered for quantum
              processing. Experience unparalleled speed and precision.
            </p>
            <button>View Demo</button>
          </div>
          <div className="product-item">
            <h2>NeuroSync Board</h2>
            <p>
              Bridging the gap between analog and digital, this board integrates
              neural network principles into advanced circuit design.
            </p>
            <button>View Demo</button>
          </div>
          <div className="product-item">
            <h2>Flux Capacitor 3000</h2>
            <p>
              An entirely fictional yet impressive-sounding product demo
              designed to dazzle even the most critical technologists.
            </p>
            <button>View Demo</button>
          </div>
        </div>
      </section>
    </>
  );
}