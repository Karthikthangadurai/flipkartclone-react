import React from 'react'
import { PiArrowRightBold } from "react-icons/pi";



const links =[
    {
        title:"Fashion's Top Deals",
        symbol:<PiArrowRightBold />,
    },
    {
        title:"Shop Your Favourites",
        symbol:<PiArrowRightBold />,
    },
    {
        title:"Festive Home Delights",
        symbol:<PiArrowRightBold />,
    },
]

const list =[
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/shoe/m/i/n/-original-imahd2pytrgd3h9f.jpeg?q=60" ,
        name:"Men's Casual Shoes",
        offer:"Min. 70% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/slipper-flip-flop/l/n/k/7-375bg-375bk-375gr-375gry-footup-beige-black-green-grey-original-imahec2pbftahhff.jpeg?q=60" ,
        name:"Men's Slippers & Flip Flops",
        offer:"Min. 70% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/7/7/6/s-st2-vebnor-original-imahekf5guf9jzar.jpeg?q=60" ,
        name:"Casual Shirts",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/watch/g/r/f/1-led-watch-combo-digital-watch-for-boys-56-girls-renzy-boys-original-imagjwk4hbggvbur.jpeg?q=60" ,
        name:"Wrist Watches",
        offer:"Min. 90% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/headphone/j/f/m/tws-airpod-black-earbud-techio-original-imahdhf4wbccgyan.jpeg?q=60" ,
        name:"True Wireless",
        offer:"Special Offer",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/headphone/w/9/v/soulbuds-100-hours-playtime-wireless-neckband-earphone-ucool-original-imah6n7zedfxa99p.jpeg?q=60" ,
        name:"Neckband",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/power-bank/o/2/a/-original-imahdthbvkfxrdnf.jpeg?q=60" ,
        name:"Power Banks",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=60" ,
        name:"Smart Watches",
        offer:"Min. 40% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/collapsible-wardrobe/7/n/v/11-carbon-steel-51-3-at-3-door-grey-attache-grey-26-original-imahfv4fzgy5hwkw.jpeg?q=60" ,
        name:"Collapsible Wardrobes",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/bedsheet/8/u/h/-original-imahept2yknjrmkc.jpeg?q=60" ,
        name:"Bedsheets",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/carpet-rug/l/x/p/7-5-pe-vc-multicolor-155x215-00b-sasta-sunder-tikau-original-imahaytqhw3bczhn.jpeg?q=60" ,
        name:"Floor Coverings",
        offer:"Min. 50% Off",
    },
    {
        image:"https://rukminim2.flixcart.com/image/420/420/xif0q/bottle/f/6/0/2000-2-liter-transparent-motivational-leakproof-bpa-free-marker-original-imahfsvh9gvhhgxp.jpeg?q=60" ,
        name:"Water Bottles & Flasks",
        offer:"Special Offer",
    },
]

const Section4 = () => {

 // Split the list into 3 groups of 4
  const imageSize = 4;
  const imagesLists = [];
  for (let i = 0; i < list.length; i += imageSize) 
    {
    imagesLists.push(list.slice(i, i + imageSize));
  }

  return (
    <section className="md:flex md:justify-between">

        {links.map((link,i) =>(
        <div key={i} className="mx-4 my-4 border shadow">
        <div className="m-4 md:h-10 flex justify-between items-center">
        <h1 className="md:text-2xl font-semibold">{link.title}</h1>
        <button className="bg-blue-600 p-1 md:p-2 rounded-full text-white text-center">{link.symbol} </button>
         </div>
        
            <div className="p-2 md:p-5 grid grid-cols-2 cursor-pointer gap-5 ">
            {imagesLists[i]?.map((item, j) =>(  
            <div key={j} className="p-3 border rounded text-center">
            <img src={item.image} alt="photo" className="p-2 w-28 md:w-44 mx-auto h-32 md:h-48 hover:scale-110 transition"/>
            <p className="text-xs md:text-base">{item.name}</p>
            <p className="mt-1 text-green-700 text-xs md:text-base font-bold">{item.offer}</p>
            </div>
            ))}
        </div> 
        </div>
        ))}
        
        </section>
  );
}

export default Section4;