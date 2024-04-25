import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";
import { DexBlock } from "./dex-block";
import { ImgsBlock } from "./imgs-block";

export const SixthSection = (props: any) => {
  return (
    <>
      <div className="block6 flex w-full flex-col items-center">
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
