import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";

import boxCard from "./components/boxCard";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>

        <boxCard title="hi"/>
        <boxCard title="bye"/>
        <boxCard title="hallo"/>
        <boxCard title="hello"/>
      </main>
      <Footer/>
    </>
  );
}

export default App
