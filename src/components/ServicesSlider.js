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
import Slider from 'react-slick';

function ServicesSlider() {
    const settings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <Slider {...settings}>
            {serviceData.map((item, index) => <ServiceItem item={item} key={index}/>)}
        </Slider>
      )
}

export default ServicesSlider