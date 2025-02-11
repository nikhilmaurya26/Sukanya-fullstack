import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, headTextAnimation } from '../config/motion';
import { Text } from '@mantine/core';
import {Colors}  from '../colors/Colors';

const ContentPart = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        {...headTextAnimation('up')}
        initial="initial"
        animate="animate"
        exit="exit"
        {...fadeAnimation}
        className="flex flex-col items-center md:items-start"
      >
        <h1 className={`mt-4 w-fit text-3xl font-extrabold tracking-wider text-wrap text-[${Colors.RED}] uppercase md:mt-0 md:text-6xl`}>
          Shop Our Collections
        </h1>
        <Text mt={'lg'} size={'lg'} className="max-w-sm md:max-w-xl">
          “Explore our carefully curated collections designed for the busy mom
          who deserves both style and comfort. Whether you’re looking for
          everyday essentials or a special piece for a night out, we’ve got you
          covered. Browse by category to find your perfect fit.”
        </Text>
      </motion.div>
    </div>
  );
};

export default ContentPart;
