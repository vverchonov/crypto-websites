import { easeInOut, motion } from "framer-motion";
import { Circle } from "./circle";

export const FloatingItems = () => {
  return (
    <div>
      <motion.div
        className="w-full flex justify-center p-8"
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
        <img className="w-1/3 drop-shadow-2xl" src="./block2/alien.png" />
      </motion.div>
      <Circle />
    </div>
  );
};
