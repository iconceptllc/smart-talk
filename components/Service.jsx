import Image from 'next/image';
import videoFill from "@/public/assets/video_fill.svg"

const Service = ({ title, iconImage, lists }) => {
  
  return (
    <div className="service">
      <div className="icon w-full flex justify-center items-center text-center mb-4">
        <Image src={iconImage} alt={`${title} icon`} width={60} height={60} />
      </div>
      <h3 className="bg-blue text-black text-center mb-4 rounded-md">{title}</h3>
      <ul>
        {lists.map((listItem, index) => (
         <li key={index} className="flex gap-3"> <Image src={videoFill} alt="Icon" width={16} height={16} /> {listItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
