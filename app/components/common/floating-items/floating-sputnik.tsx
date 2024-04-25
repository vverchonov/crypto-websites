import { motion } from "framer-motion";

export const FloatingSputnik = (props: any) => {
  return (
    <motion.div
      style={{ y: props.y }}
      className={"absolute p-8 z-0 select-none " + props.itemClass}
    >
      <motion.div
        initial={{
          transform: "translateZ(2px) translateY(2px) rotate(0deg)",
        }}
        animate={{
          transform: "translateZ(8px) translateY(-4px) rotate(4deg)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <img
          className="w-20 md:w-36 drop-shadow-xl z-0"
          style={{ transform: props.imageClass }}
          src="./block1/sputnik.webp"
          alt="sputnik"
        />
      </motion.div>
    </motion.div>
  );
};
