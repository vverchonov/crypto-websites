import { motion } from "framer-motion";
import { Circle } from "../common/circle";

export const FloatingItems = (props: any) => {
  return (
    <div className="relative">
      <motion.div
        className="w-full flex justify-center p-8 pt-0 z-40 relative"
        style={{ y: props.y }}
      >
        <motion.div
          className="w-full flex justify-center z-40 relative"
          initial={{
            transform: "translateZ(-40px) translateY(-150px) translateX(0px)",
          }}
          animate={{
            transform: "translateZ(64px) translateY(-75px) translateX(10px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            className="w-1/3 img-hor drop-shadow-2xl z-40 relative"
            src="./block2/alien.png"
          />
        </motion.div>
      </motion.div>
      <Circle class={"img-hor"} />
    </div>
  );
};
