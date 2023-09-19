import { Variants } from "framer-motion";

export const zoomIn: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  end: {
    scale: 0,
  },
};
