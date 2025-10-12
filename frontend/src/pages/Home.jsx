import { useState } from 'react'
import Header from '../components/Home page/Header'
import Navbar from '../components/Home page/Navbar'
import Slidebar from '../components/Home page/Slidebar'
import Section1 from '../components/Home page/Section1'
import Section2 from '../components/Home page/Section2'
import Section3 from '../components/Home page/Section3'
import Section4 from '../components/Home page/Section4'
import Section5 from '../components/Home page/Section5'
import Footer from '../components/Home page/Footer'

const Home = () => {

   const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
        <Header onSearchChange={(value) => setSearchTerm(value)} />
        <Navbar/>
        <Slidebar/>
        <Section1 searchTerm={searchTerm} />
        <Section2 searchTerm={searchTerm} />
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </div>
  );
}

export default Home;