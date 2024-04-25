import { AppearWrapper } from "../../common/appear-wrapper";

export const FifthSection = (props: any) => {
  const { y } = props;
  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] justify-center overflow-x-clip blurred-border-bottom p-4 lg:p-28">
      <AppearWrapper>
        <p className="text-4xl md:text-7xl text-center font-bold uppercase text-white pt-16 pb-16 select-none">
          how to buy
        </p>
        <div className="flex flex-col flex-wrap gap-16">
          <div className="flex gap-16 flex-col lg:flex-row center-items items-center">
            <div className="w-9/12 lg:w-[30%]">
              <img
                id={"stick1"}
                src="./block5/note1.webp"
                alt="path1"
                className="select-none hover:scale-110 transition-all duration-500 rotate-[-10deg]"
              ></img>
            </div>
            <div className="w-6/12 lg:w-[20%] ms-auto hidden md:block">
              <img
                id={"arrow1"}
                src="./block5/arrow1.webp"
                alt="arrow1"
                className="select-none rotate-[-10deg]"
              ></img>
            </div>
            <div className="w-9/12 lg:w-[40%] ms-auto">
              <img
                id={"stick2"}
                src="./block5/note2.webp"
                alt="path2"
                className="select-none hover:scale-110 transition-all duration-500 rotate-[25deg]"
              ></img>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  justify-center align-center items-center">
            <div className="w-9/12 lg:w-[25%] flex">
              <img
                id={"stick3"}
                src="./block5/note3.webp"
                alt="path3"
                className="mt-auto select-none hover:scale-110  transition-all duration-500 rotate-[2deg]"
              ></img>
            </div>
            <div className="w-9/12 lg:w-[25%]">
              <img
                id={"stick4"}
                src="./block5/note4.webp"
                alt="path4"
                className="rotate-[-2deg] select-none hover:scale-110  transition-all duration-500"
              ></img>
            </div>
            <div className="w-9/12 lg:w-[25%] flex justify-center">
              <img
                id={"stick5"}
                src="./block5/note5.webp"
                alt="path5"
                className="select-none rotate-[3deg] hover:scale-110  transition-all duration-500"
              ></img>
            </div>
            <div className="w-6/12 lg:w-[10%] -translate-y-[25%] hidden md:block">
              <img
                id={"arrow1"}
                src="./block5/arrow2.webp"
                alt="arrow2"
                className="select-none rotate-[deg]"
              ></img>
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
