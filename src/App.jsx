import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Page wrapper with gentle background accents */}
      <Hero />
      <About />
      <Offerings />
      <Contact />
    </div>
  );
}

export default App;
