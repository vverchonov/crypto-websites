import { motion } from "framer-motion";

export const FloatingAlien = (props: any) => {
  return (
    <div
      className={"absolute tranfrom z-50 select-none " + props.customTranslate}
    >
      <motion.div className="w-full flex justify-center" style={{ y: props.y }}>
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
          <img
            className={"w-1/3 drop-shadow-2xl " + props.customClass}
            src={props.imgPath}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
