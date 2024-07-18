import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import HeroImage from "@/public/assets/final-studio-bg.webp"
import Logo from './Logo'

const Hero = () => {
  return (
    <div className="relative z-0 w-full h-[100vh]">
            <Logo />
            <Image 
            src={HeroImage} 
            width={0}
            height={0}
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            alt=""
            className="absolute top-0 z-0 object-fit" 
            />
            <div className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                <h1 className="text-white sm:text-6xl text-4xl font-semibold mb-4">Podcast <br /> & <br /> Video 
                Production</h1>
                <a href="#bookNow" className="text-white bg-primary px-10 py-3 rounded-3xl text-sm mt-4">
                Book Now
                </a>
            </div>
            

        {/* <Navbar /> */}
        
    </div>
  )
}

export default Hero