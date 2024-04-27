"use client";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { distance } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Mesh } from "three";
import { FBXLoader, OBJLoader } from "three/examples/jsm/Addons.js";

export const Cat = (props: any) => {
  const catRef = useRef();
  const obj = useLoader(OBJLoader, "./puss_danya.obj");
  const texture = useTexture("./texture_danya.png");

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  useFrame((state, delta) => {
    //@ts-ignore
    // catRef.current.rotation.y += 0.005;
    //@ts-ignore
    // catRef.current.rotation.x -= 0.005;
  });

  // useEffect(() => {
  //   //@ts-ignore
  //   catRef.current.rotation.x -= 90;
  // }, []);

  return (
    <>
      <mesh
        position={[0, -1.5, 0]}
        onClick={props.play}
        ref={catRef as any}
        geometry={geometry}
        scale={1.2}
      >
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </>
  );
};
