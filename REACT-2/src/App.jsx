import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Student from "./components/Student";
const evolutions = [
{
  id : 1,
  name : "Eevee",
  sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  type : "Normal",
},
{
  id : 2,
  name : "Vaporeon",
  sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  type : "Water",
},
{
  id : 3,
  name : "Jolteon",
  sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  type : "Electric",
},
{
  id : 4,
  name : "Flareon",
  sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  type : "Fire",
},
];
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <div className="card-item">
        {evolutions && evolutions.length ? (
          evolutions.map((ev) => (
          <Card key={ev.id} 
          /*name={ev.name} 
          sprite ={ev.sprite} 
          type={ev.type}*/
          {...ev}
          />
          ))
          ) : (
            <p>No Data Available</p>
          )}
        </div>
        <Student/>
        </main>
      <Footer/>
    </>
  );
}

export default App
