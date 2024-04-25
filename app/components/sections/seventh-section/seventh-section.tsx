import { AppearWrapper } from "../../common/appear-wrapper";

export const SeventhSection = (props: any) => {
  const { y } = props;

  return (
    <div className="w-full min-h-screen flex justify-center blurred-border-top overflow-x-clip relative bg-black">
      <AppearWrapper>
        <div className="pt-48 px-6 lg:px-64 pb-36 max-w-screen-2xl">
          <p className="text-3xl md:text-5xl font-bold text-white text-center md:leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </AppearWrapper>
    </div>
  );
};
