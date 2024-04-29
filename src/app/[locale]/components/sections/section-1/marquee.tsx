import Marquee from "react-fast-marquee";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

export const MarqueeCustom = () => {
  return (
    <AppearWrapper>
      <div className="w-full my-16">
        <Marquee autoFill>
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
          <img className="w-6/12" src="./section-1/marquee.jpg" />
        </Marquee>
      </div>
    </AppearWrapper>
  );
};
