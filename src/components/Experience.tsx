import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SciFi } from "./SciFi";

export function Experience() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <SciFi scale={4} position={[1, -10, 1]} />
    </>
  );
}
