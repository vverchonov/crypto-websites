import { motion } from "framer-motion";

export const FloatingSilica = (props: any) => {
  return (
    <motion.div
      style={{ y: props.y }}
      className={"absolute p-8 z-0 " + props.itemClass}
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
          className="w-20 md:w-28 drop-shadow-xl z-0"
          style={{ transform: props.imageClass }}
          src="./block1/silica.webp"
        />
      </motion.div>
    </motion.div>
  );
};
