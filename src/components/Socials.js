import React from 'react'
import Link from 'next/link';

// icons
import { LiaGithubSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { AiFillCodeSandboxSquare } from "react-icons/ai";

function Socials() {
  return (
    <div className='flex items-center gap-x-5 text-2xl z-10'>
          <Link  
            href="https://github.com/jessemart07" 
            target="_blank"
            className='hover:text-accent transition all duration-300'
            ><LiaGithubSquare /></Link>
          <Link
            href="https://www.linkedin.com/in/jesse-martin-986971151"
            target="_blank"
            className='hover:text-accent transition all duration-300 '
            ><CiLinkedin /></Link>
          <Link
            href="https://codesandbox.io/u/jessedev07"
            target="_blank"
            className='hover:text-accent transition all duration-300'
            ><AiFillCodeSandboxSquare /></Link>
        </div>
  )
}

export default Socials