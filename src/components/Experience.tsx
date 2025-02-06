import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SciFi } from "./SciFi";

export function Experience() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[50, -12, -5]}
        rotation={[0, 1.5, 0]}
      />
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <SciFi scale={4} position={[1, -10, 1]} />
    </>
  );
}
