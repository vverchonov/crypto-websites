import { easeInOut, motion } from "framer-motion";

type Props = {
    itemClass: string;
    imageClass: string;
};

export const FloatingSilica = (props: Props) => {
    return (
        <div className={props.itemClass}>
            <motion.div
                className="w-full p-8 z-0"
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
                    ease: easeInOut,
                }}>
                <img
                    className="w-28 drop-shadow-xl z-0"
                    style={{ transform: props.imageClass }}
                    src="./block1/silica.webp"
                />
            </motion.div>
        </div>
    );
};
