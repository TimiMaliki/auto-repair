import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full grid lg:grid-cols-2 gap-3">
        <div className="our-services overflow-hidden p-4">
          <h1 className="text-4xl text-center lg:text-7xl font-extrabold overflow-hidden" data-aos="fade-right">
          Onze diensten
          </h1>
        </div>

        <div className="text overflow-hidden">
          <p className="lg:text-xl text-base text-center overflow-hidden p-4" data-aos="fade-left">
          Of uw auto nu een eenvoudige onderhoudsbeurt of een grote reparatie nodig heeft, wij staan voor u klaar. Van motordiagnostiek tot remreparaties, van ophangingswerkzaamheden tot transmissieservices, onze bekwame technici hebben de expertise om elke klus, groot of klein, aan te kunnen. We gebruiken onderdelen van hoge kwaliteit en volgen de beste praktijken uit de sector om uw voertuig weer optimaal te laten presteren.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-2 lg:p-12">
        {/* <div className="grid place-content-center"> */}

        <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20  border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">3D uitlijnen</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20   border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Diagnose</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2  lg:p-20 border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Herstellingen</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 lg:p-20  border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Autoruiten herstellen  en vervangen</h2>
          {/* </div> */}
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-2 lg:p-12">
        {/* <div className="grid place-content-center"> */}

        <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20  border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Onderhoud Airco's</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20   border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Banden</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2  lg:p-20 border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">HKeuring<br />snazicht</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 lg:p-20  border border-black rounded-lg shadow-lg"  data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">Verzerkering<br />soffertes</h2>
          {/* </div> */}
        </div>
      </div>






    </div>
  );
};

export default Service;
