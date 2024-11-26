import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Requirements from './components/Requirements';
import Projects from './components/Projects';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Process />
        <Requirements />
        <Projects />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;