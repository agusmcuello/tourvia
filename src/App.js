import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/Services";
import Tours from "./components/Tours";
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </main>
  );
}

export default App;
