import React, { Component } from "react";
import "aframe";
import "ar.js";

class ARView extends Component {
  render() {
    return (
      <>
        {/* @ts-ignore */}
        <model-viewer
          src="./cat1.glb"
          ar
          //@ts-ignore
          class="block w-full min-h-screen z-50"
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
        >
          {/* @ts-ignore */}
        </model-viewer>
      </>
    );
  }
}

export default ARView;
