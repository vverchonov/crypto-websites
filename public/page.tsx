const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <model-viewer
        class={"w-full min-h-screen"}
        src="alpha-blend-litmus.glb"
        ar
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
};

export default Page;
