import Accomodation from './components/Accomodation';
import Destinations from './components/Destinations';
import Faq from './components/Faq';
import FeaturedBlogs from './components/FeaturedBlogs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Newsletter from './components/Newsletter';
import AdventureCatalyst from './components/AdventureCatalyst';
import Planning from './components/Planning';
import Reviews from './components/Reviews';
import Transportation from './components/Transportation';
import TripBookingSteps from './components/TripBookingSteps';
import ExploreOptions from './components/ExploreOptions';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExploreOptions />
      <Destinations />
      <TripBookingSteps />
      <Planning />
      <Accomodation />
      <Transportation />
      <AdventureCatalyst />
      <FeaturedBlogs />
      <Reviews />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
