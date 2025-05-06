import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import CounterFacts from '../components/CounterFacts';

function Home() {
  return (
    <>

      <Topbar />
      <Navbar />
    <HeroCarousel/>
    <About/>
    <CounterFacts/>
    </>
  );
  }

export default Home;