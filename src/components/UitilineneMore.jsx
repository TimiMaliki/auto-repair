import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
import { HomeDisplayBlog } from "./HomeDisplayBlog";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBlog = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-full h-full mt-12 overflow-hidden">
      <div className="w-full h-full flex justify-between gap-8 p-8 lg:p-14">
        <div className="our-services  overflow-hidden" data-aos="fade-down-right">
        <Link to={"uitil"}><h1 className="text-3xl  lg:text-7xl font-extrabold">3D uitlijnen</h1></Link>  
        </div>

        <div className="text w-1/2 flex justify-end gap-10 mt-1 overflow-hidden"  data-aos="fade-down-left">
          <Link to={"uitil"}>
          <p className="text-2xl mt-1 cursor-pointer">More </p></Link>
          <Link to={"uitil"}>
          <div className="mt-2 text-2xl"><FaArrowRight style={{width:"100%"}}/></div></Link>
        </div>
      </div>
      <HomeDisplayBlog  />
    </div>
  );
};

export default HomeBlog;
