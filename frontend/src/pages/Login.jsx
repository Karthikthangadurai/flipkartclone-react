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
    <section>

          <div className="sticky top-0 z-10">
          <Header/>
          </div>

          <div className="h-screen flex justify-center items-center">
          <form onSubmit={handleSubmit} className="basis-10/12 md:basis-4/6 lg:basis-3/6 p-8 sm:p-16 border border-gray-300 shadow-lg rounded-lg ">
            <h1 className="text-xl md:text-3xl text-blue-800 font-bold font-serif text-center ">Sign In</h1>
            <label for="email" className="font-semibold mt-2 text-sm md:text-base">Email</label>
            <input type="email" placeholder="Enter Email" required id="email"  className="md:my-2 bg-gray-50 text-sm md:text-base border border-blue-300 shadow rounded-sm p-1 mt-2 w-[100%] hover:border-blue-500 focus:outline-blue-700"/>
            <label for="password" className="mt-2 font-semibold text-sm md:text-base">Password</label>
            <div className="relative md:my-2">
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password" required id="password"  className="bg-gray-50 text-sm md:text-base border border-blue-300 shadow rounded-sm p-1 mt-2 w-[100%] hover:border-blue-500 focus:outline-blue-700"/><br />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-sm md:text-base text-gray-500 hover:text-blue-700">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            
            <a href='#' className="text-blue-400 font-sans text-sm md:text-base"> Forget Password?</a>
            
            <div className="mx-auto mt-4 text-center w-[100%]">
            <button type="submit" className="px-10 py-2 bg-blue-700 text-sm md:text-base text-white rounded font-semibold hover:bg-green-600">Sign In</button>
            </div>

            <p className="mt-3 text-sm md:text-base text-right text-gray-500">Don't have an account? <Link to="/Signup" className="text-blue-700 underline hover:text-blue-500 hover:no-underline">Create Now</Link></p>

            <p className=" mt-3 text-sm md:text-base  text-gray-400 text-center font-serif font-semibold">---------------- or ----------------</p>
            <div className="mx-auto mt-3 place-items-center w-[100%]">
            <a href='#' className="px-6 py-2 font-serif text-sm md:text-base flex justify-center border border-gray-400 shadow gap-2 md:gap-5 items-center rounded-md  hover:text-blue-700 hover:border-blue-400"><FaGoogle/>Continue with Google</a>
            </div>

           </form>
          </div>

        <div>
          <Footer/>
        </div>
      
    </section>
  );
}

export default Login;