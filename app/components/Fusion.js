"use client";

import { useEffect, useState } from "react";

export default function HyperChaoticBlob() {
  const [p5, setP5] = useState(null);

  useEffect(() => {
    import("p5").then((p5Module) => {
      setP5(() => p5Module.default);
    });
  }, []);

  useEffect(() => {
    if (!p5) return;

    let sketchInstance;

    const sketch = (s) => {
      // Tokamak configuration
      const R = 50; // Major radius (distance from torus center to tube center)
      const r = 15; // Minor radius (tube radius)
      const twists = 3; // How many times the field line twists around
      const numFieldLines = 8;
      const resolution = 100;

      // Build an array of helical field line parameters
      let fieldLines = [];
      for (let i = 0; i < numFieldLines; i++) {
        fieldLines.push({
          offsetTheta: (i / numFieldLines) * s.TWO_PI,
          offsetPhi: (i / numFieldLines) * s.TWO_PI,
          twists: twists,
        });
      }

      // Plasma particles that will ride along the magnetic field lines
      let plasmaParticles = [];
      const numParticles = 200;
      for (let i = 0; i < numParticles; i++) {
        plasmaParticles.push({
          fieldLineIndex: Math.floor(s.random(0, numFieldLines)),
          t: s.random(0, 1),
        });
      }

      // Given a parameter t [0, 1], compute a point on the helical field line
      function getFieldLinePoint(t, R, r, twists, offsetTheta, offsetPhi) {
        const phi = t * s.TWO_PI * twists + offsetPhi;
        const theta = t * s.TWO_PI + offsetTheta;
        const x = (R + r * s.cos(phi)) * s.cos(theta);
        const y = (R + r * s.cos(phi)) * s.sin(theta);
        const z = r * s.sin(phi);
        return s.createVector(x, y, z);
      }

      s.setup = () => {
        s.createCanvas(400, 400, s.WEBGL);
        s.angleMode(s.RADIANS);
      };

      s.draw = () => {
        s.background(0);

        // Set up some basic lighting to give our fusion reactor a glow
        s.ambientLight(60);
        s.pointLight(255, 255, 255, 200, -200, 200);

        // Slowly rotate the entire scene for a dynamic 360° view
        s.rotateY(s.frameCount * 0.005);
        s.rotateX(s.frameCount * 0.003);

        // Draw the tokamak chamber as a wireframe torus
        s.push();
        s.noFill();
        s.stroke(100);
        s.torus(R, r, 24, 16);
        s.pop();

        // Draw the helical magnetic field lines wrapping around the chamber
        s.push();
        s.stroke(255, 170, 0);
        s.noFill();
        for (let i = 0; i < numFieldLines; i++) {
          let params = fieldLines[i];
          s.beginShape();
          for (let j = 0; j <= resolution; j++) {
            const t = j / resolution;
            const pt = getFieldLinePoint(
              t,
              R,
              r,
              params.twists,
              params.offsetTheta,
              params.offsetPhi,
            );
            s.vertex(pt.x, pt.y, pt.z);
          }
          s.endShape();
        }
        s.pop();

        // Update and draw plasma particles as they ride the magnetic field lines
        s.push();
        s.fill(255, 0, 0);
        s.noStroke();
        const dt = 0.001;
        for (let i = 0; i < plasmaParticles.length; i++) {
          let particle = plasmaParticles[i];
          particle.t += dt;
          if (particle.t > 1) particle.t -= 1;
          let params = fieldLines[particle.fieldLineIndex];
          const pos = getFieldLinePoint(
            particle.t,
            R,
            r,
            params.twists,
            params.offsetTheta,
            params.offsetPhi,
          );
          s.push();
          s.translate(pos.x, pos.y, pos.z);
          s.sphere(2);
          s.pop();
        }
        s.pop();
      };
    };

    sketchInstance = new p5(
      sketch,
      document.getElementById("hyperchaotic-blob-container"),
    );

    return () => {
      sketchInstance.remove();
    };
  }, [p5]);

  return <div id="hyperchaotic-blob-container"></div>;
}
