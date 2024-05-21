import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingBanana } from "../../common/floating-items/floating-banana";
import { Langs, useGetWordsHook } from "../../useGetWordsHook";

export const SeventhSection = (props: any) => {
  const { y } = props;
  const { word } = useGetWordsHook();

  return (
    <div className="w-full min-h-screen sblock bg-[url(/block6/space.webp)] sblock flex justify-center overflow-x-clip relative bg-black">
      <AppearWrapper>
        <div className="pt-48 px-6 w-full h-full lg:px-48 pb-36 max-w-screen-2xl relative flex justify-center items-center flex-col gap-8">
          <FloatingBanana
            bananaClass={"rotate-12"}
            key={2}
            customClass={"absolute right-0 w-fit top-0 z-0 select-none"}
          />
          <FloatingBanana
            key={1}
            customClass={"absolute left-12 w-fit top-48 z-0 select-none"}
          />
          <FloatingBanana
            bananaClass={"rotate-90"}
            key={3}
            customClass={"absolute left-0 w-fit bottom-48 z-0 select-none"}
          />
          <FloatingBanana
            bananaClass={"rotate-4"}
            key={5}
            customClass={"absolute right-8 w-fit bottom-[50%] z-0 select-none"}
          />
          <p className=" text-4xl leading-loose lg:text-6xl font-bold text-center text-white lg:leading-loose relative z-50">
            {word("4", props.lang)}
          </p>
          <img className="object-contain h-[50vh]" src={"./bought.webp"} />
        </div>
      </AppearWrapper>
    </div>
  );
};
