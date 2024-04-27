"use client";
import React, { useState } from "react";

export const ARTest = (props: any) => {
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const handleClick = (event: any) => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      //@ts-ignore
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
      if (hit) {
        //@ts-ignore
        setAnnots((annot: any) => {
          return [...annots, hit];
        });
      }
    }
  };

  const getDataPosition = (annot: any) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
  };

  const getDataNormal = (annot: any) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
  };

  return (
    //@ts-ignore
    <model-viewer
      className="model-viewer"
      src="./Horse.glb"
      alt="A rock"
      exposure="0.008"
      camera-controls
      ar
      ar-modes="webxr"
      onClick={handleClick}
      //@ts-ignore
      ref={(ref) => {
        modelRef.current = ref;
      }}
    >
      {annots.map((annot, idx) => (
        <button
          key={`hotspot-${idx}`}
          className="view-button"
          slot={`hotspot-${idx}`}
          data-position={getDataPosition(annot)}
          data-normal={getDataNormal(annot)}
        ></button>
      ))}
      {/* @ts-ignore */}
    </model-viewer>
  );
};
