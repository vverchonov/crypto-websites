import { motion } from "framer-motion";

export const FloatingSharkgirl = (props: any) => {
  return (
    <>
      <motion.div
        style={{ y: props.y }}
        className="absolute right-4 top-56 lg:top-0 w-fit z-50 md:pe-16 select-none "
      >
        <motion.div
          className="w-fit"
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
            className="w-24 md:w-48 lg:w-64 ms-auto drop-shadow-xl z-0"
            src="./block3/girl.webp"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
