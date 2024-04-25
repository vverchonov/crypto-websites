export const ImgsBlock = () => {
  return (
    <>
      <div className="min-h-screen w-full pt-28 p-4 lg:px-24 pb-28 max-w-screen-2xl content-center">
        <div className="flex w-full items-center flex-col min-h-screen">
          <div className="flex flex-col justify-center lg:flex-row w-full h-1/3">
            <div className="flex justify-center md:w-2/4 lg:justify-start">
              <img
                className=" w-11/12 lg:w-9/12 h-full object-contain  mirror-y select-none"
                src="./block6/frame1.webp"
              />
            </div>
            <div className="flex justify-center">
              <img
                className=" w-9/12 lg:w-7/12 h-full select-none"
                src="./block6/frame2.webp"
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center h-1/3">
            <img
              className=" w-10/12 lg:w-4/12 h-full object-contain select-none"
              src="./block6/frame3.webp"
            />
          </div>
          <div className="flex flex-col justify-center lg:flex-row w-full h-1/3">
            <div className="flex justify-center">
              <img
                className="w-full h-full object-contain mirror-y select-none"
                src="./block6/frame4.webp"
              />
            </div>
            <div className="img6-holder flex justify-center lg:justify-start">
              <img
                className="ms-auto w-10/12 h-full select-none"
                src="./block6/frame5.webp"
              />
            </div>
            <div className="img6-holder flex justify-center lg:justify-start">
              <img
                className="ms-auto w-9/12 object-contain h-full select-none"
                src="./block6/frame6.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
