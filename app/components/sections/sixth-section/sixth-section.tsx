import { AppearWrapper } from "../../common/appear-wrapper";
import { DexBlock } from "./dex-block";
import { ImgsBlock } from "./imgs-block";

export const SixthSection = (props: any) => {
  const { y } = props;
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
