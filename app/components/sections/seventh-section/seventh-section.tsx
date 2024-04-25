import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingBanana } from "../../common/floating-items/floating-banana";

export const SeventhSection = (props: any) => {
  const { y } = props;

  return (
    <div className="w-full min-h-screen flex justify-center blurred-border-top overflow-x-clip relative bg-black">
      <AppearWrapper>
        <div className="pt-48 px-6 lg:px-64 pb-36 max-w-screen-2xl relative">
          <p className="text-3xl md:text-5xl font-bold text-white text-center md:leading-loose z-40 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <FloatingBanana
            key={2}
            customClass={"absolute right-12 w-fit top-0 z-0 select-none"}
          />
          <FloatingBanana
            key={1}
            customClass={"absolute left-12 w-fit top-48 z-0 select-none"}
          />
          <FloatingBanana
            key={3}
            customClass={"absolute left-48 w-fit bottom-48 z-0 select-none"}
          />
          <FloatingBanana
            key={5}
            customClass={"absolute right-48 w-fit bottom-[50%] z-0 select-none"}
          />
        </div>
      </AppearWrapper>
    </div>
  );
};
