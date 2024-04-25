import { motion } from "framer-motion";

export const FloatingMeteor = (props: any) => {
  return (
    <>
      <motion.div
        style={{ y: props.y }}
        className=" p-8 absolute left-0 w-fit bottom-64 z-0 select-none "
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
            className="w-36 rotate-45 drop-shadow-xl z-0"
            src="./block3/meteor.png"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
