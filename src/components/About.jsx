import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="w-full h-full  grid lg:grid-cols-3 lg:p-12">
      <div className="card-one w-full h-full  text-center overflow-hidden">
        <h1 className="text-2xl lg:text-7xl font-extrabold mt-2 p-8 overflow-hidden" data-aos="zoom-in">
       AUTO CENTER KELLA
        </h1>
      </div>

      <div className="card-one w-full h-full  text-center overflow-hidden">
        <h1 className="text-2xl font-extrabold p-2 overflow-hidden" data-aos="zoom-in">BEST SERVICE FOR YOUR CAR</h1>
      </div>

      <div className="card-one w-full h-full  text-center overflow-hidden">
        <p className="text-xl   p-10" data-aos="zoom-in">
        "Onze garage is opgericht in 2012. Wij willen ons onderscheiden door een persoonlijkere aanpak en alternatieve oplossingen. <br /> <br /> 
        Bij Auto Center Kella is uw auto in vertrouwde handen. Auto Center Kella onderscheidt zich door gedegen vakmanschap, een uitstekende werkplaats, goede service en persoonlijke aandacht voor iedere klant. <br /> <br /> 
        Wij zijn vooraf helder over de kosten en gebruiken alleen kwaliteitsonderdelen.
        </p>
      </div>
    </section>
  );
};

export default About;
