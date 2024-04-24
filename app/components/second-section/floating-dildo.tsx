import { motion } from "framer-motion";

export const FloatingDildo = (props: any) => {
  return (
    <div>
      <motion.div className="absolute left-0 bottom-48" style={{ y: props.y }}>
        <motion.div
          className="w-fit"
          initial={{
            transform: "translateZ(2px) translateY(2px) rotate(0deg)",
          }}
          animate={{
            transform: "translateZ(8px) translateY(-4px) rotate(10deg)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            className="w-28 drop-shadow-xl rotate-180 z-0"
            src="./block2/dildo.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
