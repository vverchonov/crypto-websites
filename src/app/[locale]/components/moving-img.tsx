"use client";
import { motion } from "framer-motion";

export const MovingImg = (props: any) => {
  return (
    <motion.div
      className={"absolute " + props.customClassWrapper}
      style={{ y: props.y }}
    >
      {/*  MAYBE MOVE THIS WRAPPER SEPARETE IF WE NEED TO REUSE IT  */}
      <motion.div
        className="w-full flex justify-center"
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
          ease: "easeInOut",
        }}
      >
        <img className={props.customClassImg} src={props.imgPath} />
      </motion.div>
    </motion.div>
  );
};
