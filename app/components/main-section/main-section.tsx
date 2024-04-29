import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cat } from "./cat";

export const MainSection = (props: any) => {
  return (
    <div className="" style={{ width: "100%", height: "100vh" }}>
      <p className="text-black">latest</p>
      <Canvas className="z-0">
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight intensity={2} color={"white"} />
        <Cat
          scale={0.5}
          obj={"./cat.obj"}
          texture={"./texture.png"}
          play={props.play}
        />
      </Canvas>
    </div>
  );
};
