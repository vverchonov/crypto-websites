import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingBanana } from "../../common/floating-items/floating-banana";

export const SeventhSection = (props: any) => {
  const { y } = props;

  return (
    <div className="w-full min-h-screen sblock bg-[url(/block6/space.webp)] sblock flex justify-center overflow-x-clip relative bg-black">
      <AppearWrapper>
        <div className="pt-48 px-6 w-full h-full lg:px-48 pb-36 max-w-screen-2xl relative">
          <FloatingBanana
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
          />
          <p className=" text-2xl leading-loose lg:text-6xl font-bold text-center text-white lg:leading-loose relative z-50">
            In the vast cosmic sea, where the silent stars play, Alon sails
            alone, night blending into day. His ship, stitched from dreams,
            glides through starlit streams, A wanderer roaming where the galaxy
            gleams.
            <br />
            <br /> Through celestial tales and planetary trails,He seeks kinship
            where earthly logic fails.Yet amidst galaxies wide and nebulas
            bright,He finds solace in the endless starry night.
            <br />
            <br />
            Alon, the alien, in his quest to belong,Finds peace in the
            universe's grand song.Though alone he may seem in the vast, infinite
            dome,In the cosmos’s embrace, he's eternally home.
          </p>
        </div>
      </AppearWrapper>
    </div>
  );
};
