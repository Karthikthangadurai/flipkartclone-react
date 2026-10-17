import React from 'react'
import { useState } from 'react'
import Header from '../components/Home page/Header'
import Footer from '../components/Home page/Footer'
import{FaGoogle,FaEyeSlash,FaEye} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Signup = () => {


  // {const handleSubmit = (e) => {
   // e.preventDefault(); }}

   const [showPassword, setShowPassword] = useState(false);
   const [confirmPassword, setConfirmPassword] = useState(false);

  return (
        <section>

          <div className="sticky top-0 z-10">
          <Header/>
          </div>

          <div className='h-screen flex justify-center items-center'>
          <form className="basis-10/12 md:basis-9/12 lg:basis-7/12 p-8 sm:p-16 border border-gray-300 shadow-lg rounded-lg items-center">
            <h1 className="text-xl md:text-3xl text-blue-800 font-serif font-bold text-center ">Sign Up</h1>
            <p className="mt-2 font-semibold text-xs md:text-base text-center ">Have an account? <Link to="/Login" className="underline hover:no-underline hover:text-blue-700">Sign In</Link></p>

            <div className="mt-2 sm:flex justify-between gap-10 items-center">
                <div className="inline-block mx-auto w-[100%]">
              <p className="text-xs md:text-base font-semibold mt-2">First Name </p>
            <input type="text" required placeholder='Karthik' className="bg-gray-50 text-xs md:text-base border border-orange-300 shadow rounded-lg p-1 mt-2 w-[100%] hover:border-orange-400 focus:outline-orange-300"/>
            </div>
            <div className="inline-block mx-auto w-[100%]">
            <p className="text-xs md:text-base font-semibold mt-2">Last Name</p>
            <input type="text" required placeholder='K' className="bg-gray-50 text-xs md:text-base border border-orange-300 shadow rounded-lg p-1 mt-2 w-[100%] hover:border-orange-400 focus:outline-orange-300"/>
            </div>
            </div>

            <p className="text-xs md:text-base font-semibold mt-2">Email</p>
            <input type="email" required typeof="email" placeholder='karthi@gmail.com' className="bg-gray-50 text-xs md:text-base border border-orange-300 shadow rounded-lg p-1 mt-2 w-[100%] hover:border-orange-400 focus:outline-orange-300"/>
            
              <div className="mt-2 sm:flex justify-between gap-10 items-center">
                <div className="inline-block w-[100%]">
                <p className="text-xs md:text-base font-semibold mt-2">Password</p>
                <div className="relative">
            <input type={showPassword ? "text" : "password"} required typeof="password" placeholder='Enter strong password' className="bg-gray-50 text-xs md:text-base border border-orange-300 shadow rounded-lg p-1 mt-2 w-[100%] hover:border-orange-400 focus:outline-orange-300"/>
             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-xs md:text-base text-gray-500 hover:text-blue-700">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
             </div>
            </div>

            <div className="inline-block w-[100%]">
            <p className="text-xs md:text-base font-semibold mt-2">Confirm Password</p>
            <div className="relative">
            <input type={confirmPassword ? "text" : "password"} required typeof="password" placeholder='Same password enter here' className="bg-gray-50 text-xs md:text-base border border-orange-300 shadow rounded-lg p-1 mt-2 w-[100%] hover:border-orange-400 focus:outline-orange-300"/>
            <button type="button" onClick={() => setConfirmPassword(!confirmPassword)} className="absolute right-3 top-4 text-xs md:text-base  text-gray-500 hover:text-blue-700">
                {confirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
            </div>
            </div>
            
            <div className="mt-4 text-center">
            <button type="submit" className="md:mt-2 px-1 py-2 md:p-2 bg-blue-700 text-sm md:text-base text-white rounded w-[50%] md:w-[60%] font-semibold hover:bg-blue-600 ">Sign up</button>
            </div>
              <p className=" mt-3 text-xs md:text-base  text-gray-400 text-center font-serif font-semibold">---------------- or ----------------</p>
            <div className="mt-3 place-items-center">
            <button className=" p-2 flex justify-center text-sm md:text-base font-serif border border-gray-400 shadow md:w-[60%] gap-2 md:gap-5 items-center rounded-md  hover:text-blue-700 hover:border-blue-400"><FaGoogle/>Continue with Google</button>
            </div>

           </form>
           </div>

        <div>
          <Footer/>
        </div>
      
    </section>
  );
}

export default Signup;