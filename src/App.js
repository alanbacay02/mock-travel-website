import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import ValueProposition from './components/ValueProposition';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <ValueProposition />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
