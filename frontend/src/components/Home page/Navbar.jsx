import React from 'react'

const Navlinks = [
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100" ,
    name:"Minutes",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" ,
    name:"Mobiles & Tablets",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" ,
    name:"TVs & Appliances",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" ,
    name:"Electronics",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" ,
    name:"Fashion",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100" ,
    name:"Home & Kitchen",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100" ,
    name:"Beauty & Toys",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100" ,
    name:"Furniture",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100" ,
    name:"Flight Bookings",
  },
  {
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100" ,
    name:"Grocery",
  },
  
]


const Navbar = () => {


  return (

    <div className="hidden md:block">
    <div className="mx-4 my-2 px-20 py-5 bg-white border shadow flex justify-around flex-wrap">
      {Navlinks.map((link,i) => (
        <div key={i} className="cursor-pointer font-semibold flex flex-col items-center text-center">
        <div><img src={link.image} alt="photo"  className="hover:scale-110 transition"/></div>
        <div><a href="#" >{link.name}</a></div>
        </div>
  ))}
    </div>
    </div>
  );
}

export default Navbar;