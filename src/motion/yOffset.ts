import { Variants } from "framer-motion";

export const yOffset: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  hidden: { y: 500, opacity: 0 },
};
