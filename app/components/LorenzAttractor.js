"use client";
import React, { useRef, useEffect } from "react";
//import p5 from "p5";
import dynamic from "next/dynamic";
const p5 = dynamic(import("p5"), { ssr: false });
const scale = 2;
const pscale = 1.01;

export default function LorenzAttractor() {
  const sketchRef = useRef();

  useEffect(() => {
    // Ensure the code only runs in the browser
    if (typeof window !== "undefined") {
      const sketch = (p) => {
        let x = Math.random(),
          y = Math.random(),
          z = Math.random();
        let x2 = Math.random() + 5 + (0.5 - Math.random()) * 100, // Offset the second attractor
          y2 = Math.random() + 5 + (0.5 - Math.random()) * 100, // Offset the second attractor,
          z2 = Math.random() + 5 + (0.5 - Math.random()) * 100; // Offset the second attractor;
        const a = 10 * scale,
          b = 28 * scale,
          c = (8 / 3) * scale;
        const dt = 0.005;
        let points = [];

        p.setup = () => {
          p.createCanvas(600, 400, p.WEBGL);
          p.background(0);
          // Draw the second attractor
          p.stroke(0, 0, 255); // Blue color for the second attractor
          p.beginShape();
          points.forEach((pt) => {
            p.vertex(pt.x + x2, pt.y + y2, pt.z + z2); // Offset by x2, y2, z2
          });
          p.endShape();
        };

        p.draw = () => {
          p.background(0, 25); // Creates a trailing effect
          // Main Lorenz attractor differential equations
          const dx = a * (y - x) * dt;
          const dy = (x * (b - z) - y) * dt;
          const dz = (x * y - c * z) * dt;
          x += dx;
          y += dy;
          z += dz;
          // Second Lorenz attractor differential equations
          const dx2 = a * (y2 - x2) * dt;
          const dy2 = (x2 * (b - z2) - y2) * dt;
          const dz2 = (x2 * y2 - c * z2) * dt;
          x2 += dx2;
          y2 += dy2;
          z2 += dz2;

          x *= pscale;
          y *= pscale;
          z *= pscale;
          x2 *= pscale;
          y2 *= pscale;
          z2 *= pscale;
          y *= pscale;
          z *= pscale;
          points.push({ x, y, z });
          if (points.length > 500 + 700 * (0.5 - Math.random())) {
            points.shift();
          }
          //p.rotateY(p.frameCount * 0.003);
          p.rotateY(y * 0.1);
          p.rotateX(x * 0.1);
          p.rotateZ(z * 0.1);
          // Draw the main attractor
          p.stroke(255, 0, 0); // Red color for the main attractor
          p.noFill();
          p.beginShape();
          points.forEach((pt) => {
            p.vertex(pt.x, pt.y, pt.z);
          });
          p.endShape();
        };
      };

      const myP5 = new p5(sketch, sketchRef.current);
      return () => {
        myP5.remove();
      };
    }
  }, []);

  return <div ref={sketchRef}></div>;
}
