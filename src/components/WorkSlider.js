import React from 'react'

// swiper
import {Swiper, SwiperSlide} from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
  } from "react-icons/rx";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact, FaHtml5, FaCss3, FaPhp, FaNode, FaNodeJs  } from "react-icons/fa";
  import { SiFirebase , SiAdobexd, SiPhpmyadmin } from "react-icons/si";
  
// next/image
import Image from 'next/image';

const workData = [
    {
        title: 'Budget Buddy',
        role: 'Devloper',
        client: 'Own Project',
        description: `My budget app dubbed the "Budget Buddy" 
        is a small mock up web based app where someone could 
        create a budget and add transactions with amounts to keep 
        track of their expenses.`,
        imageSrc: '/portfolio/Budget_buddy.png',
        technologies: [
            {
                name: 'React',
                icon: <FaReact />,
            },
            {
                name: 'Firebase',
                icon: <SiFirebase />,
            },
            {
                name: 'Adobe Xd',
                icon: <SiAdobexd />,
            }
        ]
    },
    {
        title: 'Jesse and Kylie Music',
        role: 'Devloper',
        client: 'Jesse and Kylie',
        description: `A responsive single page website used to market a musical duo. 
        This website was used to share relevant information for the duo such as 
        upcoming gigs, links to social media and a contact form for bookings`,
        imageSrc: '/portfolio/Jesse_&_Kylie.png',
        technologies: [
            {
                name: 'Javascript',
                icon: <IoLogoJavascript />,
            },
            {
                name: 'HTML',
                icon: <FaHtml5 />,
            },
            {
                name: 'CSS',
                icon: <FaCss3 />,
            }
        ]
    },
    {
        title: 'Ohana User System',
        role: 'Devloper',
        client: 'Ohana',
        description: `Ohana family website is a web platform for house sitters 
        and pet sitters. I created a user account system which took care of 
        registration, log in, role responsibility and anything to do with user 
        profiles.`,
        imageSrc: '/portfolio/Ohana.png',
        technologies: [
            {
                name: 'Php',
                icon: <FaPhp />,
            },
            {
                name: 'HTML',
                icon: <FaHtml5 />,
            },
            {
                name: 'CSS',
                icon: <FaCss3 />,
            },
            {
                name: 'PhpMyAdmin',
                icon: <SiPhpmyadmin  />,
            }
        ]
    },
    {
        title: 'DISC Quiz',
        role: 'Devloper',
        client: 'Turnkey Corporate Soutions',
        description: `The DISC quiz app is based on the popular DISC personality 
        test. This small app consisted of 24 questions and then a results page.`,
        imageSrc: '/portfolio/Disc_app.png',
        technologies: [
            {
                name: 'React',
                icon: <FaReact />,
            },
            {
                name: 'Firebase',
                icon: <SiFirebase />,
            },
            {
                name: 'CSS',
                icon: <FaCss3 />,
            },
        ]
    },
    {
        title: 'Global Academy LMS',
        role: 'Devloper',
        client: 'Global Academy',
        description: `The Global Academy LMS is a web based app to manage a number of 
        students and keep track of their performance. The functionality ranged from 
        account creation to result tracking and even attendance and reporting.`,
        imageSrc: '/portfolio/Global_Academy_Login.png',
        technologies: [
            {
                name: 'React',
                icon: <FaReact />,
            },
            {
                name: 'Firebase',
                icon: <SiFirebase />,
            },
            {
                name: 'CSS',
                icon: <FaCss3 />,
            },
            {
                name: 'Node/Express',
                icon: <FaNode />,
            },
        ]
    }
]

// import swiper modules
import { FreeMode, Pagination } from 'swiper';

function WorkSlider() {
  return (
        <Swiper 
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                }
            }}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            freeMode={true}
            >{workData.map((item, workIndex) => {
                return (
                    <SwiperSlide key={workIndex}>
                        <div 
                        className="bg-[#8cbcb90f] h-[620px] md:h-[540px] group rounded-lg px-6 py-8 cursor-pointer flex flex-col gap-x-6
                        sm:gap-x-0 ">
                            {/* title and desc */}
                            <div className='mb-4'>
                                <div className=' relative flex justify-center border-accent border-2 rounded-lg
                                p-2 h-[200px]'>
                                    <Image src={item.imageSrc} fill={true} objectFit='contain'/>
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
                    </SwiperSlide>
                )
            })
        }</Swiper>
    )
}

export default WorkSlider