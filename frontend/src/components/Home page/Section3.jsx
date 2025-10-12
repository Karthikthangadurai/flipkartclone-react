import React from 'react'

const images =[
  {
    photo:"https://rukminim2.flixcart.com/fk-p-flap/900/560/image/3a327c58a3eb6e84.jpeg?q=60" ,
  },
  {
    photo:"https://rukminim2.flixcart.com/fk-p-flap/900/560/image/4833e93bf370276a.jpeg?q=60" ,
  },
  {
    photo:"https://rukminim2.flixcart.com/fk-p-flap/900/560/image/43731c9dd5acaa56.jpeg?q=60" ,
  },
]

const Section3 = () => {
  return (
        <div className="mx-4 my-4 border shadow">
        <h1 className="px-3 py-1 md:p-3 md:text-2xl font-semibold">Featured Brands</h1>
        <div className="px-2 py-1 md:p-5 flex justify-between cursor-pointer">
          {images.map((image,i) =>(
        <img key={i} src={image.photo} alt="image" className="w-[33%] h-[30%]"/>
          ))}

        </div>
        </div>
  );
}

export default Section3;