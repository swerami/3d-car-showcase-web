import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <div className="h-screen w-screen">
        <Canvas>
          <color attach="background" args={["#010101"]} />
          <fog attach="fog" args={["#010101", 0, 15]} />
          <Experience />
        </Canvas>
      </div>
    </Suspense>
  </React.StrictMode>
);
