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

// components
import ServiceItem from './ServiceItem';

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
import { Pagination } from 'swiper/modules';

function ServicesSlider() {
    return (
        <Swiper 
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                }
            }}
            
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[240px] sm:h-[340px]"
        >{serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                  <ServiceItem item={item} />
              </SwiperSlide>
            )
          })
        }</Swiper>
      )
}

export default ServicesSlider