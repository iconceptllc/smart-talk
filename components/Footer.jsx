import Image from "next/image"
import LocationIcon from "@/public/assets/location.png"
import TelIcon from "@/public/assets/call.png"

const Footer = () => {
  return (
    <footer className="w-full flex justify-center">
          <div className='container justify-between flex py-12 max-w-4xl px-4'>
            <div className="flex justify-between w-full flex-col sm:flex-row">
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={LocationIcon}
                        width={32}
                        height={32}
                        alt=""
                    />
                    <p>Al Majaz, Sharjah <br />
                    United Arab Emirates</p>
                    
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={TelIcon}
                        width={32}
                        height={32}
                        alt=""
                    />
                    <a href="tel:+971503690637">+971 50 369 0637</a>
                    
                </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer