import React, {useState, useEffect} from 'react'

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

// Swiper modules
import { FreeMode, Pagination } from 'swiper/modules';

// components
import ServiceItem from './ServiceItem';

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
import Slider from 'react-slick';

function ServicesSlider() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, [])

    const settings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
                }
            }
        ]
      };

    return (
        <div>
            {domLoaded && <Swiper breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='h-[240px] sm-h-[340px]'>
                {serviceData.map((item, index) => <SwiperSlide><ServiceItem item={item} key={index} /></SwiperSlide>)}
            </Swiper>}
        </div>
      )
}

export default ServicesSlider