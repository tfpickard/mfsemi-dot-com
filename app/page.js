"use client";
import { useEffect } from "react";
import Head from "next/head";
import styles from "./chromata.module.css";

//const ChromataPage = () => {
export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/chromata.min.js"; // Update with the correct path to Chromata script
    script.onload = () => {
      const image = document.querySelector("#image");
      var optoins = {
        colorMode: "color",
        compositeOperation: "lighten",
        iterationLimit: 0,
        key: "low",
        lineWidth: 2,
        lineMode: "smooth",
        origin: ["bottom"],
        outputSize: "original",
        pathFinderCount: 30,
        speed: 7,
        turningAngle: Math.PI,
      };

      const chromata = new Chromata(image, {
        pathFinderCount: 15,
        speed: 9,
        turningAngle: Math.PI / 2,
        colorMode: "color",
        lineWidth: 2,
        lineMode: "square",
        compositeOperation: "lighten",
        origin: ["50% 50%"],
        outputSize: "original",
        key: "low",
        backgroundColor: "hsla(34, 70%, 70%, 0)",
      });
      chromata.start();

      document.querySelector("#toggle").addEventListener("click", () => {
        const count = chromata.toggle();
        console.log("iterations: " + count);
      });

      document.querySelector("#reset").addEventListener("click", () => {
        chromata.reset();
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>MFSemi LLC - Home</title>
        <meta
          name="description"
          content="Leading the future of electronics design."
        />
      </Head>
      <section className="home">
        <h1 className="glow-text">Welcome to MFSemi LLC</h1>
        <p>Leading the future of electronics design and innovation.</p>
        <div className="container">
          <img id="image" src="/logo.png" alt="Chromata Artwork" />
          <button id="toggle">Toggle</button>
          <button id="reset">Reset</button>
        </div>
        <div className="banner">
          <h2>Powering the Future</h2>
          <button className="order-btn">Pre-Order Now</button>
        </div>
      </section>
    </>
  );
}

//export default ChromataPage;
