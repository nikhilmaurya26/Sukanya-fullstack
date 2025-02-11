import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
  fadeAnimation,
} from '../config/motion';
import state from '../store';
import logo from '../assets/Sblogo-removebg-preview.png';
import CustomButton from '../components/CustomButton';
import {Colors}  from '../colors/Colors';

const Home = () => {
  const snap = useSnapshot(state);

  const handleExploreClick = () => {
    // state.intro = false;
    setTimeout(() => {
      const carouselSection = document.getElementById('carousel-section');
      if (carouselSection) {
        carouselSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100); // Adjust timing as needed
  };

  return (
    <AnimatePresence mode="wait">
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header initial="initial" animate="animate" exit="exit">
            <div className="flex items-start justify-start">
              <motion.img
                src={logo}
                alt="logo"
                className="w-[130px] object-contain md:h-30 md:w-30"
                {...fadeAnimation}
              />
              <motion.div
                {...headTextAnimation('up')}
                initial="initial"
                animate="animate"
                exit="exit"
                {...fadeAnimation}
              >
                <h1 className="text-4xl font-extrabold tracking-wider text-wrap text-[#A10614] uppercase md:text-7xl">
                  Sukanya Boutique & Fashion Studio
                </h1>
              </motion.div>
            </div>
          </motion.header>

          <motion.div
            {...headContentAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mt-5 flex w-[100%] flex-col items-start justify-center gap-4"
          >
            <motion.div className="sm:ms-[8rem] sm:max-w-md" {...fadeAnimation}>
              Where timeless elegance meets contemporary style. Discover curated
              collections of bespoke fashion pieces that celebrate individuality
              and sophistication. Our boutique offers personalized styling
              experiences to help you create your perfect wardrobes.
            </motion.div>
            <motion.div {...fadeAnimation}>
              <CustomButton
                handleClick={handleExploreClick}
                customStyle={`p-2 w-[200px] sm:ms-[8rem] bg-[${Colors.RED}]`}
                title={'Explore'}
                variant={'primary'}
                type={'primary'}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
