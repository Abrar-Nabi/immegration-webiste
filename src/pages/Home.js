import Topbar from '../components/Topbar';
import Navbar from './Navbar';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import CounterFacts from '../components/CounterFacts';
import Services from '../components/Services';
import Features from '../components/Features';
import CountriesWeOffer from '../components/CountriesWeOffer';
import Testimonial from '../components/Testimonial';
import Footer from './Footer';
import PartnerWithUs from '../components/PartnerWithUs';


function Home() {
  return (
    <>

<Topbar />
<Navbar />
<div id="home"><HeroCarousel /></div>
<div id="about"><About /></div>
<div id="counter"><CounterFacts /></div>
<div id="services"><Services /></div>
<div id="features"><Features /></div>
<div id="countries"><CountriesWeOffer /></div>
<div id="testimonial"><Testimonial /></div>
<div id=""><PartnerWithUs/></div>
<div id=""><Footer /></div>


    </>
  );
}

export default Home;