export default {
  "/styles.css": /* css */ `
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow:hidden;
    background: black;
  }

  canvas { 
    width: 100%;
    height: 100%;
  }
  `,
  "/index.js": /* js */ `import "./styles.css";
import p5 from "p5";

const sketch = (s) => {
  let size;

  s.setup = () => {
    size = Math.min(s.windowWidth, s.windowHeight);
    s.createCanvas(size, size);
    s.strokeCap(s.SQUARE);
  };

  const seed = Math.random() * 4096;

  s.draw = () => {
    s.clear();
    s.background(0);
    s.fill(234, 31, 81);

    s.stroke(0);

    s.randomSeed(seed)

    const N = Math.floor( s.map(s.random(), 0, 1, 1, 10) );

    const margin = 20;
    const w = (size - margin * 2) / N;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        s.randomSeed(seed * (i + j));

        const n1 = s.noise(i, j, s.frameCount * 0.002);
        const n2 = s.noise(i * 10, j * 10, s.frameCount * 0.002);

        if (n1 > 0.15) {
          s.strokeWeight(n2 * (w/4));
          s.noFill();

          s.randomGaussian() > 0.5 ? s.fill(255) : s.stroke(255);

          const r = n1 * w;
          const x = i * w + w / 2 + margin;
          const y = j * w + w / 2 + margin;

          s.randomGaussian() > 0.9 && s.circle(x, y, r / 2);
          s.circle(x, y, r);
        }
      }
    }

  };

  // This Redraws the Canvas when resized
  s.windowResized = () => {
    size = Math.min(s.windowWidth, s.windowHeight);

    s.resizeCanvas(size, size);
  };
};

new p5(sketch, document.getElementById("app"));
`
};
