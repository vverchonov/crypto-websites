import { motion } from "framer-motion";

export const FLoatingFire = (props: any) => {
  return (
    <div
      className={
        "absolute left-0 top-0 tranfrom z-50 select-none " +
        props.customTranslate
      }
    >
      <motion.div className="flex w-fit" style={{ y: props.y }}>
        <motion.div
          className="w-fit flex justify-start"
          initial={{
            transform: "translateZ(8px) translateY(-2px) translateX(0px)",
          }}
          animate={{
            transform: "translateZ(24px) translateY(-16px) translateX(10px)",
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
            src="./block6/fire.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
