import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


const links = [
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/q/l/i/-original-imahegqhjqz38uks.jpeg?q=60" ,
        name:"Google Pixel 9",
        amount:"Just ₹34,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=60" ,
        name:"iPhone 16 Pro",
        amount:"From ₹69,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/h/-original-imahggetkf6y67sr.jpeg?q=70" ,
        name:"iPhone 16 Pro Max",
        amount:"From ₹99,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/y/w/k/-original-imahfvpcn3j8qwzk.jpeg?q=60" ,
        name:"Moto Edge 60 Pro 5G",
        amount:"From ₹24,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=60" ,
        name:"iPhone 14",
        amount:"From ₹41,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=60" ,
        name:"Moto G96 5G",
        amount:"Just ₹14,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=60" ,
        name:"Galaxy S24 5G",
        amount:"From ₹39,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/t/m/g/-original-imahcfwmrnwy9zgn.jpeg?q=60" ,
        name:"Galaxy S24 FE 5G",
        amount:"From ₹29,999",
    },
   
]

const image =[
    {
    image:"https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/6c389c7c373280bf.jpg?q=60",
    },
    {
    image:"https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/f6af21bc5209c658.jpg?q=60",
    },
    {
    image:"https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/34618ebb09245381.jpg?q=60",
    },
]

const Section1 = ({ searchTerm }) => {

  const filtered = links.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  return (
    <section>
    <div className="mx-4 my-4 border shadow">
        <h1 className="p-3 md:text-2xl font-semibold">Best deals on Smartphones</h1>
        <div className="px-10 py-5 flex justify-around flex-wrap text-center items-center cursor-pointer gap-5">
        {filtered.map((link,i) =>( 
            <div key={i}>
            <img src={link.image} alt="mobile" className="p-2 h-32 mx-auto hover:scale-110 transition"/>
            <p className="text-xs md:text-base">{link.name}</p>
            <p className="text-xs md:text-base font-semibold">{link.amount}</p>
            <div className="mt-1 md:mt-2 flex">
            <button className="p-1 md:px-4 text-white bg-yellow-400 rounded hover:bg-black "><FaCartShopping/></button>
            <button className="ml-1 p-1 md:px-2 md:py-1 text-xs md:text-base font-semibold text-white bg-blue-600 rounded hover:bg-black">Buy Now</button>
            </div>
        </div>
        ))}

        </div>
        </div>

        <div className="mx-4 my-4 p-1 border shadow flex justify-between">
        {image.map((link,j) =>( 
           <img key={j} src={link.image} alt="photo" className="w-[33%] h-[35%] cursor-pointer" /> 
        ))}
        </div>

    </section>
  );
}

export default Section1;