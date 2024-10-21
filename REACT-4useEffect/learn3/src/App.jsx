/*import { useEffect, useState } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        if (!ignore) {
          setPokemon(data.results);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPokemon();

    return () => {
      ignore = true;
    };
  }, []);

  return pokemon.map((p) => {
    return (
      <div key={p.name}>
        <span>{p.name}</span>
      </div>
    );
  });
};

export default App; */
import { useEffect, useState } from 'react';

const App = () => {
  const [limit, setLimit] = useState(15);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getPokemon = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        );
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        if (!ignore) {
          setPokemon(data.results);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPokemon();

    return () => {
      ignore = true;
    };
  }, [limit]);

  return pokemon.map((p) => {
    return (
      <div key={p.name}>
        <span>{p.name}</span>
      </div>
    );
  });
};

export default App;

