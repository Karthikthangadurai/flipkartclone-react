import { useState } from 'react'
import Header from '../components/Home page/Header'
import Footer from '../components/Home page/Footer'
import{FaGoogle,FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); }

  return (
    <section className="flex flex-col">

          <div className="sticky top-0 z-10">
          <Header/>
          </div>

          <form onSubmit={handleSubmit} className="m-10 md:mx-96 md:my-48 p-5 md:p-20 border border-gray-300 shadow-lg rounded-lg items-center">
            <h1 className="text-xl md:text-3xl text-blue-800 font-bold font-serif text-center ">Sign In</h1>
            <p className="font-semibold mt-2 text-xs md:text-base">Email</p>
            <input type="email" placeholder="Enter Email" required typeof="email"  className="bg-gray-50 text-xs md:text-base border border-blue-300 shadow rounded-sm p-1 mt-2 w-[100%] hover:border-blue-500 focus:outline-blue-700"/>
            <p className="mt-2 font-semibold text-xs md:text-base">Password</p>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password" required typeof="password"  className="bg-gray-50 text-xs md:text-base border border-blue-300 shadow rounded-sm p-1 mt-2 w-[100%] hover:border-blue-500 focus:outline-blue-700"/><br />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-xs md:text-base text-gray-500 hover:text-blue-700">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            
            <button className="mt-3 text-blue-400 font-sans text-xs md:text-base"> Forget Password?</button><br />
            
            <div className="mt-4 text-center">
            <button type="submit" className="md:mt-2 px-1 py-2 md:p-2 bg-blue-700 text-sm md:text-base text-white rounded w-[40%] md:w-[60%] font-semibold hover:bg-blue-600 ">Sign In</button>
            </div>

            <p className="mt-3 text-xs md:text-base text-right text-gray-500">Don't have an account? <Link to="/Signup" className="text-blue-700 underline hover:text-blue-500 hover:no-underline">Create Now</Link></p>

            <p className=" mt-3 text-xs md:text-base  text-gray-400 text-center font-serif font-semibold">---------------- or ----------------</p>
            <div className="mt-3 place-items-center">
            <button className=" p-2 font-serif text-sm md:text-base flex justify-center border border-gray-400 shadow md:w-[60%] gap-2 md:gap-5 items-center rounded-md  hover:text-blue-700 hover:border-blue-400"><FaGoogle/>Continue with Google</button>
            </div>

           </form>

        <div>
          <Footer/>
        </div>
      
    </section>
  );
}

export default Login;