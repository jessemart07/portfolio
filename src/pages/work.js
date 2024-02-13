import React from 'react';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// components
import WorkSlider from '@/components/WorkSlider';

function Work() {
  return (
    <div className='h-full xl:h-screen bg-primary/30 py-32 flex items-center px-5 xl:pl-10 xl:pr-32'>
      <div className="animate-spin-slow opacity-20 bg-circles1 -bottom-32 -right-20  xl:-bottom-52 xl:-right-32 
      absolute w-[220px] xl:w-[300px] h-[220px] xl:h-[305px] bg-cover bg-no-repeat z-0 "></div>
      <div className=" bg-shapes -left-64 xl:-left-48 absolute w-[500px] xl:w-[500px] h-[80%] xl:h-full 
      bg-cover bg-no-repeat z-0 opacity-10 "></div>
      <div className='container mx-auto'>
          <div className="flex flex-col xl:flex-row items-center gap-x-2" >
            {/* text */}
            <div className="text-center flex w-full lg:w-[15vw] flex-col lg:text-left mb-4">
              <div className="flex flex-col">
                <motion.span
                  variants={fadeIn('down', 0.4)}
                  initial="hidden"
                  animate="show"
                  className='text-sm pl-1'
                >MY</motion.span>
                <motion.h2 
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                animate="show"
                className='h2 text-accent'>
                  Work
                </motion.h2>
              </div>
            </div>
            <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            
            className='w-full lg:w-[70vw]'> 
              {/* slider */}
              <WorkSlider />
            </motion.div>
          </div>
      </div>
    </div>
  )
}

export default Work