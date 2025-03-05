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
      const originalText = element.innerHTML;
      const textNodes = getTextNodes(element);

      // Scramble only text nodes, preserving structure
      textNodes.forEach((node) => {
        const originalText = node.nodeValue;
        const characters = [...originalText];

        let scrambledArray = characters.map((char) =>
          char === " " ? " " : randomChar(),
        );

        node.nodeValue = scrambledArray.join("");

        let indices = characters
          .map((_, i) => i)
          .sort(() => Math.random() - 0.5);

        setTimeout(() => {
          let unscrambleIndex = 0;
          const interval = setInterval(() => {
            if (unscrambleIndex < indices.length) {
              let idx = indices[unscrambleIndex];
              scrambledArray[idx] = characters[idx];
              node.nodeValue = scrambledArray.join("");
              unscrambleIndex++;
            } else {
              clearInterval(interval);
              node.nodeValue = originalText;
            }
          }, 500);
        }, 500);
      });
    }

    function randomChar() {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    function getTextNodes(element) {
      let textNodes = [];
      function scanNodes(node) {
        if (node.nodeType === 3 && node.nodeValue.trim() !== "") {
          textNodes.push(node);
        } else {
          node.childNodes.forEach(scanNodes);
        }
      }
      scanNodes(element);
      return textNodes;
    }

    // Select all visible elements but only scramble their text nodes
    const textElements = Array.from(document.body.querySelectorAll("*")).filter(
      (el) => el.childNodes.length > 0,
    );

    textElements.forEach(scrambleText);
  }, [Letterize]);

  return (
    <>
      <Head>
        <title>MFSemi LLC - Products</title>
        <meta name="description" content="Explore our cutting-edge products." />
      </Head>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="products">
        <h1>Our Products</h1>
        <div className="product-list">
          <div className="product-item">
            <h2>Quantum Chip X-1</h2>
            <p>
              A revolutionary semiconductor chip engineered for quantum
              processing.
            </p>
            <button>View Demo</button>
          </div>
          <div className="product-item">
            <h2>NeuroSync Board</h2>
            <p>
              Bridging the gap between analog and digital with neural
              integration.
            </p>
            <button>View Demo</button>
          </div>
          <div className="product-item">
            <h2>Flux Capacitor 3000</h2>
            <p>A fictional product demo designed to impress technologists.</p>
            <button>View Demo</button>
          </div>
        </div>
      </section>
    </>
  );
}
