"use client";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export const Cat = (props: any) => {
  const catRef = useRef();
  const obj = useLoader(OBJLoader, "./mesh.obj");
  const texture = useTexture("./albedo.png");

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
    catRef.current.rotation.y += 0.005;
    //@ts-ignore
    catRef.current.rotation.x -= 0.005;
  });

  return (
    <>
      <mesh
        onClick={props.play}
        ref={catRef as any}
        geometry={geometry}
        scale={3}
      >
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </>
  );
};
