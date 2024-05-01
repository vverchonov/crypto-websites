"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const modelViewerRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  const onProgress = (event: { detail: { totalProgress: any } }) => {
    const totalProgress = event.detail.totalProgress;
    setProgress(totalProgress * 100);
    if (totalProgress === 1) {
      const modelViewer = modelViewerRef.current;
      if (modelViewer) {
        modelViewer?.removeEventListener("progress", onProgress);
      }
    }
  };

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      modelViewer.addEventListener("progress", onProgress);
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("progress", onProgress);
      }
    };
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <model-viewer
        ref={modelViewerRef}
        src="RobotExpressive.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        ar-status="not-presenting"
        tone-mapping="neutral"
        poster="poster.webp"
        shadow-intensity="1"
        autoplay
      >
        <div className={`progress-bar ${progress === 100 ? "hide" : ""}`}>
          <div className="update-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="ar_hand_prompt.webp" />
        </div>
        {/* @ts-ignore */}
      </model-viewer>
    </>
  );
}
