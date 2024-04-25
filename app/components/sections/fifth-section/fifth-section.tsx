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
          <div className="flex gap-16 flex-col-reverse lg:flex-row">
            <div className="w-11/12 lg:w-5/12">
              <img
                id={"stick1"}
                src="./block5/note1.png"
                alt="path2"
                className=""
              ></img>
            </div>
            <div className="w-11/12 lg:w-5/12 ms-auto stick1">
              <img
                id={"stick2"}
                src="./block5/note2.png"
                alt="path2"
                className=""
              ></img>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-11/12 lg:w-4/12 lg:h-64 flex">
              <img
                id={"stick3"}
                src="./block5/note3.png"
                alt="path2"
                className="mt-auto"
              ></img>
            </div>
            <div className="w-11/12 lg:w-4/12">
              <img
                id={"stick4"}
                src="./block5/note4.png"
                alt="path2"
                className="stick2"
              ></img>
            </div>
            <div className="w-11/12 lg:w-4/12">
              <img
                id={"stick5"}
                src="./block5/note5.png"
                alt="path2"
                className="stick3"
              ></img>
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
