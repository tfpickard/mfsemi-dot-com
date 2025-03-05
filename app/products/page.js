import React from "react";
import Head from "next/head";
export default function Products() {
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
