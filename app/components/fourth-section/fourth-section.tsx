export const FourthSection = (props: any) => {
  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] blurred-border overflow-x-clip">
      <img
        src="/block4/table.png"
        alt="table"
        className="w-full absolute bottom-0"
      ></img>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[25%] z-50 w-full">
        <div className="relative flex items-center justify-center">
          <img src="/block4/pc.png" alt="pc" className="w-[30%]"></img>
          <img
            className="screen-content absolute"
            src="/block4/meme.jpg"
            alt="Screen Content"
          ></img>
          <button className="button1 absolute">Next</button>
          <button className="button2 absolute">Prev</button>
        </div>
      </div>
      <img
        src="/block4/planet.png"
        alt="planet"
        className="w-[10%] absolute top-0 left-0 transform translate-x-1/4 translate-y-1/2"
      ></img>
      <img
        src="/block4/sticker1.png"
        alt="sticker1"
        className="w-[15%] absolute top-0 left-0 transform translate-x-[70%] translate-y-[60%]"
      ></img>
      <img
        src="/block4/sticker2.png"
        alt="sticker1"
        className="w-[15%] absolute top-0 right-0 transform -translate-x-[60%] translate-y-[10%]"
      ></img>
      <img
        src="/block4/cow.png"
        alt="sticker1"
        className="w-[15%] absolute bottom-28 right-0 transform -translate-x-[60%] -translate-y-[50%]"
      ></img>
    </div>
  );
};
