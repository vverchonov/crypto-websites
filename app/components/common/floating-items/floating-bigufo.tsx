import { motion } from "framer-motion";

export const FloatingBigUfo = (props: any) => {
  return (
    <>
      <motion.div style={{ y: props.y }} className="w-full select-none">
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
          <img className="w-full" src="./block6/ufo.png" />
        </motion.div>
      </motion.div>
    </>
  );
};
