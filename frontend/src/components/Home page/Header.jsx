import React from 'react'
import { SiFlipkart } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { BsShop } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = ({ onSearchChange, cartCount=0 }) => {


  return (
    <div className= "bg-white sticky top-0 p-4 border border-blue-100 flex justify-between md:justify-around items-center shadow ">
      <Link to="/"><div>
        <p className="px-6 py-2 md:px-14 md:py-2 md:text-3xl bg-yellow-400 text-white rounded-md cursor-pointer hover:bg-yellow-500"><SiFlipkart /></p>
      </div></Link>

  <div className="relative px-1 w-[60%] hidden md:block items-center cursor-pointer">
  <input onChange={(e) => onSearchChange(e.target.value)} type="text" placeholder="Search for Products, Brands and More..." className="p-2 pl-10 bg-slate-100 border border-blue-300 rounded-lg w-full hover:border-blue-500 focus:outline-blue-700"/>
  <p className="absolute left-3 top-3 px-1"><FaSearch/></p>
  </div>


        <div className="font-semibold flex items-center md:gap-5 cursor-pointer text-xs md:text-base">
         
          <div className="p-1 md:p-2 flex justify-center items-center rounded-md hover:text-white  hover:bg-blue-600 ">
            <p><VscAccount /></p> 
            <Link to="/Login" className="px-2">Login </Link>
            </div>

            <div className="relative p-2 flex justify-center items-center hover:text-blue-700">
            <p><FaCartShopping /></p>
            <Link to="/Cartlist" className="px-1"> Cart</Link>
            {cartCount > 0 && (
            <p className="absolute top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </p>
              )}
            </div>

            <div className="p-2 flex justify-center items-center hover:text-blue-700">
            <p className="md:text-lg"><BsShop /></p>
            <Link to="/Products" className="px-1">Products</Link>
            </div>

            <p className="hover:bg-slate-200 md:px-3 md:py-1 rounded md:text-2xl hover:text-blue-700">⁝</p>
        </div>
    </div>
  );
}

export default Header;