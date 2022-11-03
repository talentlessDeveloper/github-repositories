export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 1,
    rotate: 6,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export const itemMain = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0,
  },
  show: {
    opacity: 1,
    y: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

export const letterContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const letter = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

export const ulVariants = {
  open: {
    visibility: "visible",
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: "hidden",
    opacity: 0,
    x: 400,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 1,
    },
  },
};
export const liVariants = {
  open: {
    y: 0,
    opacity: 1,

    transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 1 },
    //   transition: {
    //     y: { stiffness: 1000, velocity: -50 },

    //   },
  },
  closed: {
    y: 200,
    opacity: 0,

    transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 2 },
    //   transition: {
    //     y: { stiffness: 1000 },
    //   },
  },
};
