import { motion } from "framer-motion";

export const FloatingDrink = (props: any) => {
  return (
    <motion.div
      //   style={{ y: props.y }}
      className="w-full flex justify-center p-8 absolute top-20"
      initial={{
        transform: "translateZ(2px) translateY(2px) rotate(0deg)",
      }}
      animate={{
        transform: "translateZ(32px) translateY(-8px) rotate(1deg)",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <img
        className="w-32 rotate-45 drop-shadow-xl"
        src="./block2/drink.webp"
      />
    </motion.div>
  );
};
