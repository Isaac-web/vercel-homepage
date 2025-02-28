import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container max-w-6xl mx-auto pt-32">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
