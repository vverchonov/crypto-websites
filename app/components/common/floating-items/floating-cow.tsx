import { motion } from "framer-motion";

export const FloatingCow = (props: any) => {
  return (
    <>
      <motion.div
        style={{ y: props.y }}
        className="absolute right-[18%] top-[30%] lg:bottom-[45%] w-fit z-0 pe-16 select-none"
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
            className="w-40 lg:w-64 drop-shadow-xl z-0"
            src="./block4/cow.webp"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
