import { AppearWrapper } from "../../common/appear-wrapper";

export const FifthSection = (props: any) => {
  const { y } = props;
  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] justify-center overflow-x-clip blurred-border-bottom p-4 lg:p-28">
      <AppearWrapper>
        <p className="text-4xl md:text-7xl text-center font-bold uppercase text-white pt-16 pb-16">
          how to buy
        </p>
        <div className="flex flex-col flex-wrap gap-16">
          <div className="flex gap-16 flex-col lg:flex-row center-items items-center">
            <div className="w-9/12 lg:w-[30%]">
              <img
                id={"stick1"}
                src="./block5/note1.png"
                alt="path2"
                className=""
              ></img>
            </div>
            <div className="w-9/12 lg:w-[25%] ms-auto stick1">
              <img
                id={"stick2"}
                src="./block5/note2.png"
                alt="path2"
                className=""
              ></img>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  justify-center align-center items-center">
            <div className="w-9/12 lg:w-[25%] flex">
              <img
                id={"stick5"}
                src="./block5/note5.png"
                alt="path2"
                className="stick3"
              ></img>
            </div>
            <div className="w-9/12 lg:w-[25%]">
              <img
                id={"stick4"}
                src="./block5/note4.png"
                alt="path2"
                className="stick2"
              ></img>
            </div>
            <div className="w-9/12 lg:w-[25%] flex justify-center">
              <img
                id={"stick3"}
                src="./block5/note3.png"
                alt="path2"
                className="mt-auto"
              ></img>
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
