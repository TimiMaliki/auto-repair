import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 p-10">
        <div className="brand">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">AUTO CENTER KELLA</h1>
        </div>

        <div className="homes  mb-8">
          <p className="mb-4 font-sans text-xl lg:text-2xl  text-yellow-700">Contacteer ons</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Voor vragen en opmerkingen kunt u altijd bij ons terecht.</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Website: <span className=" text-yellow-700">http://www.autocenterkella.com</span></a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Email:  : <span className=" text-yellow-700">nfo@autocenterkella.com</span></a>
          </li>
          </ul>
        </div>

        <div className="Blogs mb-8">
          <p className="mb-4 font-sans text-xl lg:text-2xl  text-yellow-700 ">AUTO CENTER KELLA</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Industrielaan 82 bus 5/6</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">3630 Maasmechelen</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Tel: +32 (0)89 203 179</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Gsm: +32 (0)475 40 58 05</a>
          </li>
          </ul>
        </div>

        <div className="Service  mb-8">
          <p className="mb-4 font-sans  text-yellow-700 text-xl lg:text-2xl">Maandag tot en met donderdag:</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">09:00 - 13:00 | 13:45 - 18:00 </a>
          </li>
          <li>
            <a href="" className=" text-yellow-700 hover:text-yellow-700">Vrijdag: </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">09:00 - 12:00 | 15:00 - 18:00</a>
          </li>
          <li>
            <a href="" className="text-yellow-700 hover:text-yellow-700">Zaterdag: </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">09:00 - 13:00 | 13:30 - 14:00</a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
