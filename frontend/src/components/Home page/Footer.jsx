import React from 'react'

const Footer = () => {
  return (
    <section className=" bg-black bg-opacity-85 text-white border shadow ">
        <div className="mt-4 p-5 flex justify-around text-xs md:text-base">
            <div>
                <p className="text-gray-400 font-semibold md:pb-2">ABOUT</p>
                <div className="cursor-pointer font-semibold md:text-sm">
                <p className="hover:underline">Contact Us</p>
                <p className="hover:underline">About Us</p>
                <p className="hover:underline">Careers</p>
                <p className="hover:underline">Flipkart Stores</p>
                <p className="hover:underline">Press</p>
                <p className="hover:underline">Corporate Information</p>
                </div>
            </div>
            <div>
                <p className="md:pb-2 text-gray-400 font-semibold">GROUP COMPANIES</p>
                <div className="cursor-pointer font-semibold md:text-sm">
                <p className="hover:underline">Myntra</p>
                <p className="hover:underline">Cleartrip</p>
                <p className="hover:underline">Shopsy</p>
                </div>
            </div>
            <div>
                <p className="md:pb-2 text-gray-400 font-semibold">HELP</p>
                <div className="cursor-pointer font-semibold md:text-sm">
                <p className="hover:underline">Payments</p>
                <p className="hover:underline">Shipping</p>
                <p className="hover:underline">Cancellation & Returns</p>
                <p className="hover:underline">FAQ</p>
                </div>
            </div>
            <div className="hidden md:block">
                <p className="md:pb-2 text-gray-400 font-semibold">CONSUMER POLICY</p>
                <div className="cursor-pointer font-semibold md:text-sm">
                <p className="hover:underline">Cancellation & Returns</p>
                <p className="hover:underline">Terms Of Use</p>
                <p className="hover:underline">Security</p>
                <p className="hover:underline">Privacy</p>
                <p className="hover:underline">Sitemap</p>
                <p className="hover:underline">Grievance Redressal</p>
                <p className="hover:underline">EPR Compliance</p>
                </div>
            </div>

             <div>
                <p className="md:pb-2 text-gray-400 font-semibold">Social:</p>
                <div className="cursor-pointer font-semibold md:flex md:gap-5">
               <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="social" />
               <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="social" />
               <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="social" />
               <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="social" className=" w-6 h-5"/>
                </div>
            </div>
          
            
        </div>
    <div className="my-1 p-1 md:my-2 md:p-4 border border-gray-600 flex justify-around font-semibold text-xs md:text-base">
        <p className="cursor-pointer hidden md:block">🚚 Become a Seller</p>
        <p className="cursor-pointer hidden md:block">🌠 Advertise</p>
        <p className="cursor-pointer hidden md:block">🎁 Gift Cards</p>
        <p className="cursor-pointer hidden md:block">☎️ Help Center</p>
        <p className="cursor-pointer">© 2025 Flipkart.com Made with ❤️TeamMates</p>
    </div>



    </section>
  );
}

export default Footer;