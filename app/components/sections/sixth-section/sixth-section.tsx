import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";
import { DexBlock } from "./dex-block";
import { ImgsBlock } from "./imgs-block";

export const SixthSection = (props: any) => {
  return (
    <>
      <div className="flex w-full gap-16 flex-col items-center bg-[url(/block6/space.webp)] bg-center bg-cover bg-no-repeat">
        <AppearWrapper>
          <DexBlock />
        </AppearWrapper>
        <AppearWrapper>
          <ImgsBlock />
        </AppearWrapper>
      </div>
    </>
  );
};
