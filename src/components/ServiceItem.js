import React from 'react'

// icons
import { RxArrowTopRight } from 'react-icons/rx'

function ServiceItem({item}) {
  return (
    <div 
        className="bg-[#8cbcb90f] w-full group h-[250px] rounded-lg px-6 py-8 cursor-pointer flex sm:flex-col gap-x-6
        sm:gap-x-0 mx-2">
        {/* icon */}
        <div className='text-4xl text-secondary  mb-4'>{item.icon}</div>
        {/* title and desc */}
        <div className='mb-4'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
        </div>
        {/* arrow */}
        <div className="text-3xl"><RxArrowTopRight className='group-hover:rotate-45 
        group-hover: text-accent transition-all duration-300'/></div>
    </div>
  )
}

export default ServiceItem