import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import carOne from "../assets/client-logo-img/engine5.jpg"
import carTwo from "../assets/client-logo-img/engine1.jpg"
import carFour from "../assets/client-logo-img/engine3.jpg"
import carFive from "../assets/client-logo-img/engine4.jpg"




export const HomeDisplayBlog = () => {
  const feature =[carOne,carTwo,carFour,carFive,]
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-full h-full mt-12 overflow-hidden">
      <div className="car-one w-full h-full grid lg:grid-cols-4 grid-cols-2 gap-3 p-4 lg:p-12">
      {feature.map((item) => (
           <div className="flex justify-center rounded-lg" data-aos="fade-in-up">
            <img src={item} alt="" key={item.id} className="rounded-lg object-cover"/>
           </div>
        ))}
      </div>
    </div>
  );
};
