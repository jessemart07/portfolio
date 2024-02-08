
import React, {useState} from 'react'
// next/image
import Image from 'next/image';

// framer
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// count up
import CountUp from 'react-countup';
//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDatabase,
  FaNodeJs,
  FaUnity,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
} from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";
// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaDatabase />,
          <FaNodeJs />,
          <FaUnity />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />,],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bcom IT Management - University of Johannesburg, Johannesburg, South Africa',
        stage: '2014 - 2018',
      },
    ],
  },
];

function About() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left p-4'>
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-0 ">
        <Image src={'/jesse2.png'} width={500} height={500}/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row xl:gap-x-10">
        {/* text */}
        <div className="flex flex-col flex-1 justify-center xl:pl-10">
          <motion.span
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-sm pl-1'
          >MY</motion.span>
          <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 text-accent'>
            Story
          </motion.h2>
          <motion.p
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          >
            I started doing freelance web development {Number(new Date().getFullYear()) - 2018} years ago after graduating in 2018. 
            Since then I have been focusing on building websites and web apps for startups, increasing my coding arsenal in the process, and enjoying 
            tackling all challenges along the way.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mt-2 mb-2'>
                  <CountUp start={0} end={6} duration={4} delay={1.5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Year of Experience</div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mt-2 mb-2'>
                  <CountUp start={10} end={20} duration={4} delay={1.5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>
              </div>
              {/* Coffee */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mt-2 mb-2'>
                  <CountUp start={500} end={1000} duration={4} delay={1.5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Cups of Coffee</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <div 
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] xl:h-[480px] border-2 border-accent rounded-md p-4 mx-auto my-4 xl:my-0'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  className={`${
                    index === itemIndex ?
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : 'after:w-8 after:bg-white'} 
                    cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`} 
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {
              aboutData[index].info.map((infoItem, infoItemIndex) => {
                return (
                  <div key={infoItemIndex} className='flex flex-col flex-1 max-w-[300px] gap-x-2 items-center md:items-start text-white/60'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0 xl:text-left'>{infoItem.title}</div>
                    {/* stage */}
                    <div>{infoItem?.stage}</div>
                    <div className='flex flex-wrap gap-x-4 gap-y-4'>
                      {/* icons */}
                      {infoItem.icons?.map((icon, iconIndex) => <div key={iconIndex} className='text-2xl text-white'>{icon}</div>)}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About