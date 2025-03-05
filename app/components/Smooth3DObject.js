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
      let time = 0;
      let resolution = 60;
      let overlay;

      // **Lorenz Attractors**
      let x = 0.1,
        y = 0,
        z = 0; // Shape deformation
      let rx = 1,
        ry = 0,
        rz = 0; // Rotation
      let cx = 0.1,
        cy = 0.1,
        cz = 0.1; // Global color shift
      let cvx = 0.5,
        cvy = 0.5,
        cvz = 0.5; // Surface color variance

      // **New Lorenz Attractor for Position Movement**
      let px = 0.1,
        py = 0.1,
        pz = 0.1;
      const movementScale = 50;

      const a = 10,
        b = 28,
        c = 8 / 3;
      const b_thomas = 0.208; // Color attractor constant

      s.setup = () => {
        s.createCanvas(400, 400, s.WEBGL);
        s.noStroke();
        s.angleMode(s.RADIANS);

        overlay = s.createGraphics(400, 400);
        overlay.textSize(12);
        overlay.fill(180, 255, 100); // **Bright yellow-green text**
        overlay.textAlign(s.LEFT, s.TOP);
      };

      s.draw = () => {
        s.background(10);

        // **Lighting for Stronger Contrast**
        s.ambientLight(60, 60, 60);
        s.pointLight(255, 255, 255, 200, -200, 200);

        // **Chaotic Rotation (Lorenz-Driven)**
        let dt = 0.01;
        let drx = a * (ry - rx) * dt;
        let dry = (rx * (b - rz) - ry) * dt;
        let drz = (rx * ry - c * rz) * dt;
        rx += drx;
        ry += dry;
        rz += drz;

        s.rotateX(rz * 0.02);
        s.rotateY(ry * 0.02);
        s.rotateZ(rx * 0.02);

        // **New Chaotic Position Movement (Lorenz-Driven)**
        let dPx = a * (py - px) * dt;
        let dPy = (px * (b - pz) - py) * dt;
        let dPz = (px * py - c * pz) * dt;
        px += dPx;
        py += dPy;
        pz += dPz;

        let posX = s.map(px, -30, 30, -movementScale, movementScale);
        let posY = s.map(py, -30, 30, -movementScale, movementScale);
        let posZ = s.map(pz, -30, 30, -movementScale, movementScale);

        s.translate(posX, posY, posZ);

        // **Global Color Change (Lorenz-Driven)**
        let dCx = -b_thomas * cx * dt;
        let dCy = -b_thomas * cy * dt;
        let dCz = -b_thomas * cz * dt;
        cx += dCx;
        cy += dCy;
        cz += dCz;

        // **Expanded Color Range for More Shifting**
        let baseR = s.map(cx + s.sin(time * 0.1), -2, 2, 100, 255);
        let baseG = s.map(cy + s.cos(time * 0.2), -2, 2, 50, 200);
        let baseB = s.map(cz + s.sin(time * 0.15), -2, 2, 80, 255);

        // **Apply Correct Material to Blob**
        s.ambientMaterial(baseR, baseG, baseB);

        // **Chaotic Shape Deformation (FIXED!)**
        let dx = a * (y - x) * dt;
        let dy = (x * (b - z) - y) * dt;
        let dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;

        let R = s.map(x, -20, 20, 20, 90); // **75% smaller size**
        let D = s.map(y, -30, 30, 20, 60);
        let A = s.map(z, 0, 50, 1, 2.5);

        s.beginShape(s.TRIANGLE_STRIP);

        for (let i = 0; i < resolution; i++) {
          let lat1 = s.map(i, 0, resolution, 0, s.PI);
          let lat2 = s.map(i + 1, 0, resolution, 0, s.PI);

          for (let j = 0; j <= resolution; j++) {
            let lon = s.map(j, 0, resolution, 0, s.TWO_PI);

            let deformX =
              s.noise(
                A * s.sin(lat1) + time * 0.1,
                A * s.cos(lon) + time * 0.2,
              ) * D;
            let deformY =
              s.noise(
                A * s.sin(lat1 + time * 0.1),
                A * s.cos(lon + time * 0.3),
              ) *
              D *
              1.5;
            let deformZ =
              s.noise(
                A * s.sin(lat1 - time * 0.15),
                A * s.cos(lon - time * 0.25),
              ) *
              D *
              2;

            let r1 = R + (deformX + deformY + deformZ) / 3;
            let r2 = R + (deformX + deformY + deformZ) / 3;

            s.vertex(
              r1 * s.sin(lat1) * s.cos(lon),
              r1 * s.sin(lat1) * s.sin(lon),
              r1 * s.cos(lat1),
            );
            s.vertex(
              r2 * s.sin(lat2) * s.cos(lon),
              r2 * s.sin(lat2) * s.sin(lon),
              r2 * s.cos(lat2),
            );
          }
        }
        s.endShape(s.CLOSE);

        // **📝 Update Debugging Text on 2D Layer**
        overlay.clear();
        overlay.fill(180, 255, 100);
        overlay.text("Quantum Nonlocal Anisomorphic Hyperflux", 10, 10);
        overlay.text(`TQDI: ${time.toFixed(2)}`, 10, 30);
        overlay.text(
          `SSEF: X=${posX.toFixed(1)}, Y=${posY.toFixed(1)}, Z=${posZ.toFixed(1)}`,
          10,
          50,
        );
        overlay.text(
          `NAPT: RX=${rx.toFixed(2)}, RY=${ry.toFixed(2)}, RZ=${rz.toFixed(2)}`,
          10,
          70,
        );
        overlay.text(
          `QESGM: R=${baseR.toFixed(0)}, G=${baseG.toFixed(0)}, B=${baseB.toFixed(0)}`,
          10,
          90,
        );
        overlay.text(`HCEM: ${cvx.toFixed(2)}`, 10, 110);
        overlay.text(
          `AMTDF: R=${R.toFixed(1)}, D=${D.toFixed(1)}, A=${A.toFixed(1)}`,
          10,
          130,
        );

        s.resetMatrix();
        s.image(overlay, -200, -200);

        time += 0.02;
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
