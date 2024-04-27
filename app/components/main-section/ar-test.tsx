import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

export const ARTest = () => {
  return (
    <>
      <VRButton className="border-2">TEST</VRButton>
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
};
