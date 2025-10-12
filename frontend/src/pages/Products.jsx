import { useState, useEffect } from 'react'
import Header from '../components/Home page/Header'
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {

 const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

 const links = [
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/q/l/i/-original-imahegqhjqz38uks.jpeg?q=60" ,
        name:"Google Pixel 9",
        amount:"₹34,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=60" ,
        name:"iPhone 16 Pro",
        amount:"₹69,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/h/-original-imahggetkf6y67sr.jpeg?q=70" ,
        name:"iPhone 16 Pro Max",
        amount:"₹99,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/y/w/k/-original-imahfvpcn3j8qwzk.jpeg?q=60" ,
        name:"Moto Edge 60 Pro 5G",
        amount:"₹24,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=60" ,
        name:"iPhone 14",
        amount:"₹41,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=60" ,
        name:"Moto G96 5G",
        amount:"₹14,999*",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=60" ,
        name:"Galaxy S24 5G",
        amount:"₹39,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/t/m/g/-original-imahcfwmrnwy9zgn.jpeg?q=60" ,
        name:"Galaxy S24 FE 5G",
        amount:"₹29,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/g/r/-original-imahc7ez8cq55mah.jpeg?q=70",
        name:"Nothing Phone 2 Pro",
        amount:"₹18,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/u/8/z10x-5g-i2404-iqoo-original-imahbngms6vtzc9d.jpeg?q=70",
        name:"IQOO Z10X 5G",
        amount:"₹13,184",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=70",
        name:"vivo T4 5G",
        amount:"₹22,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/k/r/z10r-5g-i2410-iqoo-original-imahehzhhxvc9xgw.jpeg?q=70",
        name:"IQOO Z10R 5G",
        amount:"₹20,771",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/5/z/-original-imahawgarmg5f8ff.jpeg?q=70",
        name:"POCO C71",
        amount:"₹6,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/e/d/c61-rmx3933-realme-original-imah28xeqdygzshc.jpeg?q=70",
        name:"realme C61",
        amount:"₹6,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/w/0/-original-imah9wydggh9mtxt.jpeg?q=70",
        name:"POCO M7 5G",
        amount:"₹8,699",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/k/r/-original-imahfhudssrdghcz.jpeg?q=70",
        name:"vivo T4x 5G",
        amount:"₹13,499",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/a/z/-original-imahdv5tgeqnxge4.jpeg?q=70",
        name:"MOTOROLA G96 5G",
        amount:"₹15,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/m/z/-original-imahgfmxumntk7sy.jpeg?q=70",
        name:"Samsung S24 ULTRA 5G",
        amount:"₹78,115",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/a/9/-original-imahfw4vxaqmcsjp.jpeg?q=70",
        name:"OPPO K13x 5G",
        amount:"₹12,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/d/15-5g-redmi-15-5g-redmi-original-imahfgbgx6xvdhpq.jpeg?q=70",
        name:"REDMI 15 5G",
        amount:"₹16,749",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/w/j/nord-5-5g-cph2079-oneplus-original-imahdvhg6vvczvbp.jpeg?q=70",
        name:"OnePlus Nord 5 5G",
        amount:"₹37,899",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/u/8/z10x-5g-i2404-iqoo-original-imahbngms6vtzc9d.jpeg?q=70",
        name:"IQOO Z10X 5G",
        amount:"₹13,184",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=70",
        name:"vivo T4 5G",
        amount:"₹22,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/k/r/z10r-5g-i2410-iqoo-original-imahehzhhxvc9xgw.jpeg?q=70",
        name:"IQOO Z10R 5G",
        amount:"₹20,771",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/5/z/-original-imahawgarmg5f8ff.jpeg?q=70",
        name:"POCO C71",
        amount:"₹6,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/e/d/c61-rmx3933-realme-original-imah28xeqdygzshc.jpeg?q=70",
        name:"realme C61",
        amount:"₹6,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/w/0/-original-imah9wydggh9mtxt.jpeg?q=70",
        name:"POCO M7 5G",
        amount:"₹8,699",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/k/r/-original-imahfhudssrdghcz.jpeg?q=70",
        name:"vivo T4x 5G",
        amount:"₹13,499",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/f/0/-original-imahfghxnhsjpk3a.jpeg?q=70",
        name:"realme P4 Pro 5G",
        amount:"₹24,999",
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/y/n/-original-imah9m58zvvd44hf.jpeg?q=70",
        name:"realme P3 Pro 5G",
        amount:"₹15,999",
    },
    
 ];


  //  Filtering logic
  const filteredLinks = links.filter(link => {
    const matchSearch = link.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  
  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

   //  Add to cart functionality
 const handleAddToCart = (item) => {
    const exists = cart.find((p) => p.name === item.name);
    if (!exists) {
      const newCart = [...cart, item];
      setCart(newCart);
      alert(`${item.name} added to cart`);
    } else {
      alert(`${item.name} is already in your cart`);
    }
  };

  return (
    <section>
    <div className="sticky top-0"><Header cartCount={cart.length}  onSearchChange={setSearchTerm}/></div>

    <div className="px-7 py-5 grid grid-cols-2 md:grid-cols-5 items-center text-center cursor-pointer gap-5">
           {filteredLinks.length > 0 ? (filteredLinks.map((link,index) =>( 
                <div key={index} className="mt-5 p-5 w-[100%] h-[100%] border shadow rounded transition">
                <img src={link.image} alt="mobile" className="p-2 h-32 mx-auto hover:scale-110 transition"/>
                <p className="text-xs md:text-base font-serif">{link.name}</p>
                <p className="text-xs md:text-base font-semibold">{link.amount}</p>
                <div className="mt-1 mx-auto flex flex-col gap-2 w-max">
                <button  onClick={() => handleAddToCart(link)} className="px-2 py-1 md:px-8 text-white text-xs md:text-base font-semibold bg-yellow-400 rounded hover:bg-black flex items-center gap-2"><FaCartShopping/> Add to cart</button>
                <button className="p-1 md:px-2 md:py-1 text-xs md:text-base font-semibold text-white bg-blue-600 rounded hover:bg-black">Buy Now</button>
                </div>
            </div>
            ))
        ):( <p className="col-span-full text-center text-gray-500 text-lg">No products found 😕</p>

        )}
    
    </div>
     
    </section>
  );
};

export default Products;