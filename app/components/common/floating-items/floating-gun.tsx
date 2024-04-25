import { motion } from "framer-motion";

export const FloatingGun = (props: any) => {
  return (
    <>
      <motion.div
        style={{ y: props.y }}
        className=" p-8 absolute right-12 w-fit top-86 z-0"
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
            className="w-24 lg:w-36 rotate-45 drop-shadow-xl z-0"
            src="./block3/gun.png"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
