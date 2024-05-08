import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white justify-between text-center items-center lg:p-2 p-2 sticky">
 
      <Link to="/"><h1 className="text-xl  lg:text-5xl font-bold lg:px-4 brand   text-yellow-700">AUTO CENTER KELLA</h1></Link>
    
   

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base ">
          <Link to="/">
            <a href="" className=" text-yellow-700 hover:text-black">
              Home
            </a>
          </Link>
        </li>
      
        <li className="font-sans text-base">
          <Link to="uitil">
            <a href="" className=" text-yellow-700 hover:text-black">
            3D UITLIJNEN
            </a>
          </Link>
        </li>

        <li className="font-sans text-base">
          <Link to="diagnose">
            <a href="" className=" text-yellow-700 hover:text-black">
            Diagnose
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
