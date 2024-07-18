import React from 'react'
import Service from './Service'
import VideoIcon from "@/public/assets/audiovideo-icon.svg";
import PodcastIcon from "@/public/assets/podcast-icon.svg";
import WebIcon from "@/public/assets/web-icon.svg";


const Services = () => {

    const ServiceList = [
        {
            id: 1,
            title: 'Content Production',
            iconImage: VideoIcon,
            lists: ["Video Production", "Audio Production", "Corporate Films", "Training Videos", "Social Media Content", "Corporate Ads", "2D & 3D Modeling", "Graphics and Animation"]
        },
        {
            id: 2,
            title: 'Podcast Solutions',
            iconImage: PodcastIcon,
            lists: ["Podcast Shooting", "Single Camera Shoot", "Multi Camera Shoot", "Sound Mixing", "Post Production", "Graphics & Visual Effects", "Audio & Video Editing", "Color Grading"]
        },
        {
            id: 3,
            title: 'Web Solutions',
            iconImage: WebIcon,
            lists: ["Website Designing", "Web Development","E-commerce Solutions", "Domain & Hosting","Website AMC", "Mobile App Development","Digital Marketing", "SEO, SEM, PPC" ]
        },
    ]
  return (
    <div className="container max-w-4xl px-6 sm:px-0">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 xl:gap-16 lg:gap-14 md:gap-10 px-4">
        {ServiceList.map(service => (
        <Service
          key={service.id}
          title={service.title}
          iconImage={service.iconImage}
          lists={service.lists}
        />
      ))}
    </div>
    </div>
  )
}

export default Services