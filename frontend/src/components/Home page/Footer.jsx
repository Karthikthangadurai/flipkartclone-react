import React from 'react'
import { FaFacebook,FaSquareXTwitter,FaWhatsapp,FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="bg-gray-200/60">
        <div className="mt-3 p-5 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
            <div>
                <p className=" font-semibold text-indigo-700 md:pb-2">ABOUT</p>
                <div className="cursor-pointer mt-2">
                <a href='#' className="hover:underline hover:text-violet-600">Contact Us</a><br />
                <a href='#' className="hover:underline hover:text-violet-600">About Us</a><br />
                <a href='#' className="hover:underline hover:text-violet-600">Careers</a><br />
                <a href='#' className="hover:underline hover:text-violet-600">Flipkart Stores</a><br />
                <a href='#' className="hover:underline hover:text-violet-600">Press</a><br />
                <a href='#' className="hover:underline hover:text-violet-600">Corporate Information</a>
                </div>
            </div>
            <div>
                <p className="md:pb-2 font-semibold text-indigo-700">GROUP COMPANIES</p>
                <div className="cursor-pointer mt-2">
                <a href='#' className="hover:underline hover:text-lime-700">Myntra</a><br />
                <a href='#' className="hover:underline hover:text-lime-700">Cleartrip</a><br />
                <a href='#' className="hover:underline hover:text-lime-700">Shopsy</a>
                </div>
            </div>
            <div className='mt-2 md:mt-0'>
                <p className="md:pb-2 font-semibold text-indigo-700">HELP</p>
                <div className="cursor-pointer mt-2">
                <a href='#' className="hover:underline hover:text-blue-800">Payments</a><br />
                <a href='#' className="hover:underline hover:text-blue-800">Shipping</a><br />
                <a href='#' className="hover:underline hover:text-blue-800">Cancellation & Returns</a><br />
                <a href='#' className="hover:underline hover:text-blue-800">FAQ</a>
                </div>
            </div>
            <div className="hidden md:block">
                <p className="md:pb-2 font-semibold text-indigo-700">CONSUMER POLICY</p>
                <div className="cursor-pointer mt-2">
                <a href='#' className="hover:underline hover:text-purple-600">Cancellation & Returns</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">Terms Of Use</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">Security</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">Privacy</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">Sitemap</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">Grievance Redressal</a><br />
                <a href='#' className="hover:underline hover:text-purple-600">EPR Compliance</a>
                </div>
            </div>

             <div className='mt-2 md:mt-0'>
                <p className="md:pb-2 font-semibold text-indigo-700">SOCIAL</p>
                <div className="mt-2 font-semibold flex justify-around items-center gap-1 md:gap-2 lg:gap-5">
                    <a href="#" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600'><FaFacebook/></a>
                    <a href="#" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl '><FaSquareXTwitter/></a>
                    <a href="#" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-600'><FaWhatsapp/></a>
                    <a href="#" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600'><FaInstagram/></a>
                </div>
            </div>
          
            
        </div>

        <div className="mt-1 p-2 md:mt-2 md:p-4 text-blue-900 border border-t-indigo-600 font-semibold flex justify-around items-center gap-5 text-xs sm:text-sm md:text-base">
            <a href='#' className="cursor-pointer hidden md:block">🚚 Become a Seller</a>
            <a href='#' className="cursor-pointer hidden md:block">🌠 Advertise</a>
            <a href='#' className="cursor-pointer hidden md:block">🎁 Gift Cards</a>
            <a href='#' className="cursor-pointer hidden md:block">☎️ Help Center</a>
            <a href='#' className="cursor-pointer">&copy; 2026 Flipkart.com Made with ❤️Team</a>
        </div>



    </section>
  );
}

export default Footer;