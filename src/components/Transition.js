// framer motion
import {AnimatePresence, easeInOut, motion} from 'framer-motion'

// variants
const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        opacity: 1,
        x: '0%',
        width: '0%'
    }
}
const textVariants = {
    initial: {
        x: '50%',
    },
    animate: {
        x: ['50%', '-100%'],
        transition: {duration: 0.8, ease: [0.32, 0, 0.67, 0]}
    },
}

const pathName = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/work': 'Work',
    '/contact': 'Contact'
}
function Transition({path}) {
  return (
    <>
        <motion.div className='absolute top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#26262e] border-solid border-r-2 border-r-secondary'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.2, duration: 0.8, ease: 'easeInOut'}}>
            <motion.div className="flex w-screen h-screen place-items-center text-[#26262e] text-4xl xl:text-7xl text-outline" 
            variants={textVariants}
            initial="initial"
            animate='animate'
            >
                {pathName[path]}
            </motion.div>
        </motion.div>
        <motion.div className="absolute top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#d4a682]" 
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.4, duration: 0.8, ease: 'easeInOut'}}></motion.div>
        <motion.div className="absolute top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#e6b894]" 
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.6, duration: 0.8, ease: 'easeInOut'}}></motion.div>
    </>
  )
}

export default Transition