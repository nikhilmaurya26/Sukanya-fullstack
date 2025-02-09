// motion.js
export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 }
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0.5 }
    }
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.7 }
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 }
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 }
  }
};

export const headContainerAnimation = {
  initial: {
    opacity: 0,
    y: -100,
    transition: { ...transition, delay: 0.5 }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: 0 }
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { ...transition, delay: 0 }
  }
};

export const headContentAnimation = {
  initial: {
    y: -100,
    opacity: 0,
    transition: { ...transition, delay: 0.5 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0 }
  }
};

export const headTextAnimation = (direction) => {
  return {
    initial: {
        // x: 100,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0.5 }
      },
      animate: {
        x: 0,
        y:0,
        opacity: 1,
        transition: { ...transition, delay: 0 }
      },
      exit: {
        x: direction === "left" ? 100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        transition: { ...transition, delay: 0.5 }
      }
  }
};

export const scaleAnimation = {
  initial: {
    scale: 0,
    opacity: 0,
    transition: { ...transition, delay: 0.5 }
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { ...transition, delay: 0 }
  }
};