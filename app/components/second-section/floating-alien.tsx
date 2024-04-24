import { easeInOut, motion } from "framer-motion";
import { Circle } from "./circle";

export const FloatingItems = () => {
  return (
    <div className="relative">
      <motion.div
        className="w-full flex justify-center p-8 z-40 relative"
        initial={{
          transform: "translateZ(8px) translateY(-2px) translateX(0px)",
        }}
        animate={{
          transform: "translateZ(64px) translateY(-30px) translateX(10px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: easeInOut,
        }}
      >
        <img
          className="w-1/3 img-hor drop-shadow-2xl z-40 relative"
          src="./block2/alien.png"
        />
      </motion.div>
      <Circle />
    </div>
  );
};
