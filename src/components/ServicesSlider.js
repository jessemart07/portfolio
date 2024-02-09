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

import { GiSpanner } from "react-icons/gi";
import { FaDesktop, FaWordpress } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
// data
const serviceData = [
{
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Create beautiful UI/UX',
},
{
    icon: <FaDesktop />,
    title: 'Custom Development',
    description: 'Websites and Web apps just the way you like it',
},
{
    icon: <GiSpanner />,
    title: 'Web Maintenance',
    description: 'Making sure things always run smoothly',
},
{
    icon: <FaDesktop />,
    title: 'Custom Development',
    description: 'Websites and Web platforms just the way you like it',
},
{
    icon: <FaWordpress />,
    title: 'Wordpress Development',
    description: 'Great looking WordPress websites with broad functionality',
},
{
    icon: <FaCartShopping />,
    title: 'E-Commerce',
    description: 'Sell what you want, fast',
},
];

// import swiper modules
import { FreeMode, Pagination } from 'swiper';

function ServicesSlider() {
    return (
        <Swiper 
            slidesPerView={1}
            slidesPerGroup={1}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="h-[240px] sm:h-[340px]"
        >{serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                  <div 
                  className="bg-[#8cbcb90f] group h-[250px] rounded-lg px-6 py-8 cursor-pointer flex sm:flex-col gap-x-6
                  sm:gap-x-0">
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
              </SwiperSlide>
            )
          })
        }</Swiper>
      )
}

export default ServicesSlider