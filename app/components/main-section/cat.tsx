"use client";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { distance } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Mesh } from "three";
import { FBXLoader, OBJLoader } from "three/examples/jsm/Addons.js";

export const Cat = (props: any) => {
  const catRef = useRef();
  //"./Cat/extra/1.obj"
  const obj = useLoader(OBJLoader, props.obj);
  //"./Cat/extra/Kot5_2Шакал.png"
  const texture = useTexture(props.texture);

  const geometry = useMemo(() => {
    let g;
    //@ts-ignore
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
        scale={props.scale}
      >
        {/* @ts-ignore */}
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </>
  );
};
