import { motion } from "framer-motion";

export const AppearWrapper = (props: any) => {
  return (
    <motion.div
      className={props.customClass}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      {props.children}
    </motion.div>
  );
};
