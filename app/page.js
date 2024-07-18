import BookNow from '@/components/BookNow'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="flex m-auto justify-center pt-8 z-1 text-white">
        <Services />
      </div>
      <div className="flex m-auto justify-center pt-8 z-1 ">
        <BookNow />
      </div>
      <div className="flex m-auto pt-8 z-1 text-white">
        <Footer />
      </div>
    </div>
    
  )
}

export default page