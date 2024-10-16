import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App
