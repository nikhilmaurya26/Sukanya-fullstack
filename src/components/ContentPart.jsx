import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation, headTextAnimation } from '../config/motion'
import { Text } from '@mantine/core'

const ContentPart = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <motion.div
                {...headTextAnimation('up')}
                initial="initial"
                animate="animate"
                exit="exit"
                {...fadeAnimation}
                className='flex flex-col md:items-start items-center '
            >
                <h1 className='
                text-3xl md:mt-0 mt-4 md:text-6xl font-extrabold tracking-wider 
                text-[#A10614] uppercase text-wrap w-fit'
                >
                    Shop Our Collections
                </h1>
                <Text mt={'lg'} size={'lg'} className='max-w-sm md:max-w-xl'>
                    “Explore our carefully curated collections designed for the busy mom
                    who deserves both style and comfort. Whether you’re looking for everyday
                    essentials or a special piece for a night out, we’ve got you covered. Browse by
                    category to find your perfect fit.”
                </Text>
            </motion.div>
        </div>
    )
}

export default ContentPart
