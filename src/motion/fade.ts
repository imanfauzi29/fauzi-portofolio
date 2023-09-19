import { Variants } from "framer-motion";

export const fade: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  end: {
    opacity: 0,
  },
};

export const fadeLeft: Variants = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  end: {
    opacity: 0,
    x: -70,
  },
};

export const fadeRight: Variants = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  end: {
    opacity: 0,
    x: 70,
  },
};

export const fadeTop: Variants = {
  initial: {
    opacity: 0,
    y: -70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  end: {
    opacity: 0,
    y: -70,
  },
};

export const fadeBottom: Variants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  end: {
    opacity: 0,
    y: 70,
  },
};
