import React from 'react'
// next/image
import Image from 'next/image';

function WorkItem({item, index}) {
  return (
    <div 
        key={index}
        className="bg-[#8cbcb90f] w-full h-[620px] md:h-[600px] group rounded-lg px-6 py-8 cursor-pointer flex flex-col gap-x-6
        sm:gap-x-0 ">
            {/* title and desc */}
            <div className='mb-4'>
                <div className=' relative flex justify-center border-accent border-2 rounded-lg
                p-2 h-[200px]'>
                    <Image src={item.imageSrc} fill={true} objectFit='contain' priority={true}/>
                </div>
                <div className='my-2 text-2xl'>{item.title}</div>
                <div>
                    <div className='bg-white/20 w-max my-2 px-2'>
                        Role: <span className='text-accent'>{item.role}</span>
                    </div>
                    <div className='bg-white/20 w-max my-4 px-2'>
                        Client: <span className='text-accent'>{item.client}</span>
                    </div>
                </div>
                <p className='max-w-full leading-normal text-sm'>{item.description}</p>
            </div>
            {/* Technologies */}
            <div className="flex gap-3 mb-4 flex-wrap">
                {item.technologies.map((el, techIndex) => {
                    return (
                        <div key={techIndex} className='flex gap-x-1 items-center border-accent border-2 px-2 rounded-md w-max'>
                            <div className='text-[14px]'>
                                {el.icon}
                            </div> 
                            <span className='text-[12px]'>{el.name}</span>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default WorkItem