export const ImgsBlock = () => {
  return (
    <>
      <div className="min-h-screen w-full pt-28 p-4 lg:px-24 pb-28 max-w-screen-2xl content-center">
        <div className="flex w-full gap-24 items-center flex-col">
          <div className="flex flex-col justify-center lg:flex-row w-full gap-16">
            <div className="flex justify-center lg:justify-start">
              <img
                className="rotate-[-15deg] w-9/12 select-none"
                src="./block6/frame.webp"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rotate-[12deg]  w-10/12 select-none"
                src="./block6/frame.webp"
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <img
              className="rotate-[5deg] w-9/12 lg:w-4/12 select-none"
              src="./block6/frame.webp"
            />
          </div>
          <div className="flex flex-col justify-center gap-16 lg:flex-row w-full">
            <div className="img5-holder flex justify-center">
              <img
                className="rotate-[-12deg] w-10/12 lg:w-9/12 select-none"
                src="./block6/frame.webp"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rotate-[-8deg] w-9/12 lg:w-11/12 select-none"
                src="./block6/frame.webp"
              />
            </div>
            <div className="img6-holder flex justify-center lg:justify-start">
              <img
                className="rotate-[5deg] w-10/12 select-none"
                src="./block6/frame.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
