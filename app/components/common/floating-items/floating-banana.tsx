import { motion } from "framer-motion";

export const FloatingBanana = (props: any) => {
  return (
    <>
      <motion.div style={{ y: props.y }} className={props.customClass}>
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
            className="w-20 md:w-28 rotate-45 drop-shadow-xl z-0"
            src="./block2/banana.webp"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
