import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { BsShop } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '/image.png'

const Header = ({ onSearchChange, cartCount=0 }) => {


  return (
    <div className= "bg-transparent backdrop-blur-md sticky top-0 p-4 border border-blue-100 flex justify-around items-center shadow z-10">
      <Link to="/">
      <div>
        <img src={logo} alt="flipkart icon" className='w-8 sm:w-10 md:w-12' />
      </div></Link>

  <div className="relative px-1 mx-auto w-[60%] hidden md:block items-center cursor-pointer">
  <input onChange={(e) => onSearchChange(e.target.value)} type="text" placeholder="Search for Products, Brands and More..." className="p-2 pl-10 bg-transparent border border-blue-400 rounded-lg w-full hover:border-blue-600 focus:outline-blue-700"/>
  <span className="absolute left-3 top-3 px-1 text-blue-900"><FaSearch/></span>
  </div>


        <div className="hidden font-semibold sm:flex items-center md:gap-5 cursor-pointer text-blue-900 text-sm md:text-base">
         
          <div className="p-1 md:p-2 flex justify-evenly items-center rounded-md hover:text-white  hover:bg-blue-600 ">
            <p><VscAccount /></p> 
            <Link to="/Login" className="px-1 md:px-2">Login </Link>
            </div>

            <div className="relative p-2 flex justify-center items-center hover:text-blue-700">
            <p><FaCartShopping /></p>
            <Link to="/Cartlist" className="px-1"> Cart</Link>
            {cartCount > 0 && (
            <p className="absolute top-1 -right-1 md:-right-2 bg-red-500 text-white text-xs rounded-full px-1 md:px-1.5">
              {cartCount}
            </p>
              )}
            </div>

            <div className="p-2 flex justify-center items-center hover:text-blue-700">
            <p className="md:text-lg"><BsShop /></p>
            <Link to="/Products" className="px-1">Products</Link>
            </div>

            <p onMouseOver={() => document.querySelector('.hidden').classList.toggle('hidden')} className="hover:text-blue-700">More</p>
        </div>

        <div className="hidden absolute top-14 right-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-48">
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">Notification Preferences</li>
            <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">Sell on Flipkart</li>
            <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">24x7 Customer Care</li>
            <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">Advertise</li>
            <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">Download App</li>
          </ul>
        </div>
              
        <div className='sm:hidden'>
              <span className='text-2xl text-blue-900 cursor-pointer'><IoMenu /></span>
        </div>
    </div>
  );
}

export default Header;