export const DexBlock = () => {
  return (
    <>
      <div className="min-h-screen w-full pt-28 px-36 max-w-screen-2xl">
        <div className="ms-auto w-2/4 h-72">
          <div className="w-full h-full" id="dexscreener-embed">
            <iframe
              className="w-full h-full"
              src="https://dexscreener.com/solana/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x?embed=1&theme=dark&trades=0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
