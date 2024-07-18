import LogoImage from "@/public/assets/logo.png"
import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative flex justify-center pt-16 z-10">
        <Image 
        src={LogoImage} 
        width={200}
        height={0}
        alt=""
        className=""
        />
    </div>
  )
}

export default Logo