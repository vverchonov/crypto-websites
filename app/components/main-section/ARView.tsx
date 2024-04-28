import React, { Component } from "react";
import "aframe";
import "ar.js";

class ARView extends Component {
  render() {
    return (
      //@ts-ignore
      <a-scene embedded arjs>
        {/* @ts-ignore */}
        <a-marker preset="hiro">
          {/* @ts-ignore */}
          <a-entity
            gltf-model="./Horse.glb)"
            scale="0.1 0.1 0.1"
            position="0 0 0"
            //@ts-expect-error
          ></a-entity>
          {/* @ts-ignore */}
        </a-marker>
        {/* @ts-ignore */}
        <a-entity camera></a-entity>
        {/* @ts-ignore */}
      </a-scene>
    );
  }
}

export default ARView;
