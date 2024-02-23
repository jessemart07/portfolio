import React, { useState, useEffect } from 'react'

// swiper
import {Swiper, SwiperSlide} from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact, FaHtml5, FaCss3, FaPhp, FaNode, } from "react-icons/fa";
  import { SiFirebase , SiAdobexd, SiPhpmyadmin } from "react-icons/si";

// import swiper modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// components
import WorkItem from './WorkItem';

// data
const workData = [
    {
        title: 'Budget Buddy',
        role: 'Developer & Designer',
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
        role: 'Developer',
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
        role: 'Developer',
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
        role: 'Developer',
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
        role: 'Developer',
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


function WorkSlider() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, [])
    

  return (
    <div>
        {domLoaded && <Swiper breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            >
                {workData.map((item, index) => <SwiperSlide><WorkItem item={item} key={index} index={index}/></SwiperSlide>)}
            </Swiper>}
    </div>
    )
}

export default WorkSlider