export const SectionThree = (props: any) => {
  return (
    <div className="relative w-full mb-2 ">
      <img
        src="/section-3/topscr.png"
        alt="Top Screen"
        className="w-full absolute top-0"
      />
      <div className="min-h-screen w-full content-center bg-black">Test</div>
      <img
        src="/section-3/btmscr.png"
        alt="Bottom Screen"
        className="w-full absolute bottom-0 transfrom"
      />
    </div>
  );
};
