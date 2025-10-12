import React from 'react'

const links =[
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/television/n/j/0/-original-imahcsfhhbnpzt5z.jpeg?q=60" ,
        name:"65 / 75 inch TVs",
        amount:"Just ₹30,849*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/washing-machine-new/q/w/x/-original-imagx7qhyuxgsmfy.jpeg?q=60" ,
        name:"Trending deals",
        amount:"From ₹19,490",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/refrigerator-new/d/a/b/-original-imahce3c6fggzsag.jpeg?q=60" ,
        name:"Best-selling Refriger...",
        amount:"From ₹9,990",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/microwave-new/s/x/b/-original-imahd82ez72afreh.jpeg?q=60" ,
        name:"Microwave Ovens",
        amount:"From ₹4,990",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/air-conditioner-new/d/7/f/-original-imahdr4apzpuydyq.jpeg?q=60" ,
        name:"Lowest Price Ever",
        amount:"From ₹19,490",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mixer-grinder-juicer/i/0/m/-original-imaghy69gbrjwkvz.jpeg?q=60" ,
        name:"Kitchen Essentials",
        amount:"Just ₹1,249",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/water-purifier/q/d/w/m2-needs-no-service-for-2-years-10-stage-filtration-native-by-original-imah2usukstmh2ru.jpeg?q=60" ,
        name:"Home Essentials",
        amount:"From ₹4,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/u/m/b/-original-imah8rcwxbyk3nft.jpeg?q=60",
        name:"Monitors",
        amount:"From ₹6,599",
    },
]

const images = [
    {
        image:"https://rukminim2.flixcart.com/fk-p-flap/1600/660/image/0cbfc4fdf437a6c6.png?q=60" ,
    },
    {
        image:"https://rukminim2.flixcart.com/fk-p-flap/1600/660/image/7d0e4afcfe4a5076.png?q=60" ,
    },
    {
        image:"https://rukminim2.flixcart.com/fk-p-flap/1600/660/image/2a6e3938f7c561f8.png?q=60" ,
    },
    {
        image:"https://rukminim2.flixcart.com/fk-p-flap/1600/660/image/1da49deb54964774.jpg?q=60" ,
    },
]

const Section2 = ({ searchTerm }) => {

     const filtered = links.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
    <div className="mx-4 my-4 border shadow">
        <h1 className="p-3 md:text-2xl font-semibold">Best deals on appliances</h1>
        <div className="px-10 py-5 flex justify-around flex-wrap text-center items-center cursor-pointer gap-5">
           {filtered.map((link,i) => ( 
        <div key={i} className="text-center">
            <img src={link.image} alt="Photos" className="p-1 md:p-2 w-20 md:w-28 mx-auto h-24 md:h-36 hover:scale-110 transition"/>
            <p className="text-xs md:text-base">{link.name}</p>
            <p className="text-xs md:text-base font-semibold">{link.amount}</p>
        </div>
        ))}

        </div>
        </div>

        <div className="mx-4 my-4 border shadow flex justify-between cursor-pointer">
            {images.map((image,j) =>(
            <img key={j} src={image.image} alt="photo" className="w-[25%] h-[30%]" />
           ))}
        </div>
    
    </section>
  );
}

export default Section2;