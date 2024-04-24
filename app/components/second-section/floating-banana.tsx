import { motion } from "framer-motion";

export const FloatingBanana = (props: any) => {
  return (
    <div>
      <motion.div
        style={{ y: props.y }}
        className=" p-8 absolute right-0 w-fit top-7 z-0"
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
          className="w-28 rotate-45 drop-shadow-xl z-0"
          src="./block2/banana.webp"
        />
      </motion.div>
    </div>
  );
};
