import Destinations from './components/Destinations';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import TripBookingSteps from './components/TripBookingSteps';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <TripBookingSteps />
      <Reviews />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
