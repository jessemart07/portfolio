// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icon
import { HiArrowRight } from "react-icons/hi2";

function ProjectBtn() {
  return (
    <div className="mx-auto xl:mx-0 mb-2 xl:mt-[-30px] z-10">
        <Link href={'/work'} className="relative border-solid border-2 border-accent w-[185px] h-[50px] flex justify-evenly items-center group transition-all duration-300 hover:border-[#9cd4cf]">
            <span className="group-hover:translate-x-[-5px] duration-300">My Projects </span>
            <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-all duration-300" />
        </Link>
    </div>
    
    
  )
}

export default ProjectBtn