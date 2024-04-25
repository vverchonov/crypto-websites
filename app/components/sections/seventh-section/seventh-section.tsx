import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingBanana } from "../../common/floating-items/floating-banana";

export const SeventhSection = (props: any) => {
  const { y } = props;

  return (
    <div className="w-full min-h-screen bg-[url(/block6/space.webp)] sblock flex justify-center blurred-border-top overflow-x-clip relative bg-black">
      <AppearWrapper>
        <div className="pt-48 px-6 w-full lg:px-64 pb-36 max-w-screen-2xl relative">
          {/* <FloatingBanana
            bananaClass={"rotate-12"}
            key={2}
            customClass={"absolute right-12 w-fit top-0 z-0 select-none"}
          />
          <FloatingBanana
            key={1}
            customClass={"absolute left-12 w-fit top-48 z-0 select-none"}
          />
          <FloatingBanana
            bananaClass={"rotate-90"}
            key={3}
            customClass={"absolute left-48 w-fit bottom-48 z-0 select-none"}
          />
          <FloatingBanana
            bananaClass={"rotate-4"}
            key={5}
            customClass={"absolute right-48 w-fit bottom-[50%] z-0 select-none"}
          /> */}
        </div>
      </AppearWrapper>
    </div>
  );
};
