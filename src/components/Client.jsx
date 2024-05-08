import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dot from "../assets/client-logo-img/dot.svg";
import car  from "../assets/client-logo-img/features.png";
import 'atropos/css';
import Atropos from 'atropos/react';



const Client = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full dot flex justify-start  gap-2 lg:gap-8 p-14"  data-aos="fade-right">
        <img src={dot} alt="dot" />
        <p className="text-base lg:text-2xl w-full font-semibold">
        Wij begrijpen dat autoreparaties en -onderhoud lastig en duur kunnen zijn. Daarom streven wij ernaar om het proces zo zorgeloos en betaalbaar mogelijk te maken voor onze klanten. We bieden flexibele planningsopties die
         passen bij uw drukke levensstijl, en onze 
         concurrerende prijzen zorgen ervoor dat u de beste waar voor uw geld krijgt.
        </p>
      </div>

      <Atropos className="my-atropos" shadow={false}>
      <div className="p-14 lg:p-12 flex justify-center">
      <img src={car} alt="dot" />
      </div>
      </Atropos>
    </div>
  );
};

export default Client;