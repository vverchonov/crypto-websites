import Marquee from "react-fast-marquee";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

export const MarqueeCustom = () => {
  return (
    <AppearWrapper>
      <div className="w-full mt-16 mb-10">
        <Marquee pauseOnHover autoFill>
          <div className="flex flex-row gap-8 h-[25vh]">
            {[...Array(40)].map((_, index) => (
              <img
                key={index}
                src={`/section-1/marquee/pho${index + 1}.webp`}
                alt={`Image ${index}`}
                className="w-auto h-auto rounded-2xl select-none object-contain"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </AppearWrapper>
  );
};
