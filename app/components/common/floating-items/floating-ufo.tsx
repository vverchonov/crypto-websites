import { motion } from "framer-motion";

export const FloatingUfo = (props: any) => {
  return (
    <div
      className={
        "absolute bottom-0 right-0 tranfrom z-50 select-none " +
        props.customTranslate
      }
    >
      <motion.div className="flex w-fit" style={{ y: props.y }}>
        <motion.div
          className="w-fit flex justify-end"
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
            src="./block6/ufo-small.webp"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
