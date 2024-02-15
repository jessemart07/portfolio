import Image from 'next/image';
import { Inter } from 'next/font/google';
import ParticlesContainer from '@/components/ParticlesContainer';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
import ProjectBtn from '@/components/ProjectBtn';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-primary/60 h-screen">
      
      <div className="w-full h-full xl:h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="mix-blend-luminosity hidden xl:flex bg-none xl:bg-tech xl:bg-cover bottom-[-10px] absolute w-[110%] left-[-50%] h-full z-[-10] blur-[2px]">
          
        </div>
        <div className='text-center flex flex-col justify-center p-2 xl:pt-40 xl:text-left h-full  mx-auto xl:pl-32 z-10' >
          <motion.h1 
          className="h1"
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          >
            Hi, <span className='text-accent'>I'm Jesse</span> <br />
            I Build Things For <br />
            The Web
          </motion.h1>
          <motion.p 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            <span>I am a passionate web software developer with a love to combine <span className='text-secondary'>functionality with creativity</span>.</span><br />
          </motion.p>
          
          {/* <div className="">
          <Avatar />
          </div> */}
          {/* Projects Button */}
          <ProjectBtn />
        </div>
      </div>
      <div className="w-full xl:w-[55%] h-full absolute right-0 bottom-0 z-1">
        {/* Bg Image */}
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        className="hidden xl:flex bg-none bottom-0 
       w-full max-w-[850px] min-w-[750px] right-0 h-[90%] absolute z-[10]">
          <Image src={'/bg-images/jesse1.png'} fill={true} priority={true}/>
        </motion.div>
        
        {/* Particles */}
        <ParticlesContainer />
      </div>
    </main>
  )
}
