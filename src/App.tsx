import { Canvas } from "@react-three/fiber";
import "./App.css";
import { SciFi } from "./components/SciFi";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="h-screen">
      <Canvas
        shadows
        // camera={{ position: [40, -5, -0] }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
