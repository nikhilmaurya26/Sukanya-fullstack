import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from '../store'
import logo from '../assets/Sblogo-removebg-preview.png'
import CustomButton from '../components/CustomButton'

const Home = () => {

    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header>
                        <div className='flex justify-start items-center'>
                            <img
                                src={logo}
                                alt='logo'
                                className='md:w-20 md:h-20 w-[120px] object-contain'
                            />
                            <motion.div {...headTextAnimation('up')}>
                                <h1 className='
                        text-4xl md:text-5xl  font-extrabold tracking-wider 
                        text-[#C6605D] uppercase text-wrap'
                                >
                                    Sukanya Boutique & Fashion Studio
                                </h1>
                            </motion.div>
                        </div>
                    </motion.header>

                    <motion.div {...headContentAnimation} className=' flex justify-center mt-5 items-start flex-col gap-4 w-[100%]'>
                        <div className='sm:max-w-md' >
                            Where timeless elegance meets contemporary style. Discover curated collections
                            of bespoke fashion pieces that celebrate individuality and sophistication.
                            Our boutique offers personalized styling experiences to help you create your
                            perfect wardrobe.
                        </div>
                        <CustomButton
                            handleClick={() => state.intro = false}
                            customStyle={`p-2 bg-[${snap.color}]`}
                            title={'Explore'}
                            variant={'primary'}
                            type={'primary'}
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home
