"use client";

import { useEffect, useState } from "react";

export default function LorenzAttractor() {
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
      let x = 0.01,
        y = 0,
        z = 0;
      const a = 10,
        b = 28,
        c = 8.0 / 3.0;
      let points = [];

      s.setup = () => {
        s.createCanvas(400, 400, s.WEBGL);
        s.background(0);
      };

      s.draw = () => {
        let dt = 0.01;
        let dx = a * (y - x) * dt;
        let dy = (x * (b - z) - y) * dt;
        let dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;

        points.push([x, y, z]);

        s.background(0);
        s.scale(5);
        s.stroke(255);
        s.noFill();

        s.beginShape();
        for (let i = 0; i < points.length; i++) {
          let [px, py, pz] = points[i];
          s.vertex(px, py, pz);
        }
        s.endShape();
      };
    };

    sketchInstance = new p5(
      sketch,
      document.getElementById("lorenz-container"),
    );

    return () => {
      sketchInstance.remove();
    };
  }, [p5]);

  return <div id="lorenz-container"></div>;
}

/*
      const myP5 = new p5(sketch, sketchRef.current);
      return () => {
        if (myP5 && typeof myP5.remove === "function") {
          myP5.remove();
        }
      };
    }
  }, []);

  return <div ref={sketchRef} style={{ width: "100%", height: "100%" }}></div>;
}
*/
