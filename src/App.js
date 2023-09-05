import Accomodation from './components/Accomodation';
import Destinations from './components/Destinations';
import Faq from './components/Faq';
import FeaturedBlogs from './components/FeaturedBlogs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Newsletter from './components/Newsletter';
import Planning from './components/Planning';
import Reviews from './components/Reviews';
import Transportation from './components/Transportation';
import Travel from './components/Travel';
import TripBookingSteps from './components/TripBookingSteps';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <TripBookingSteps />
      <Planning />
      <Accomodation />
      <Travel />
      <Transportation />
      <FeaturedBlogs />
      <Reviews />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
