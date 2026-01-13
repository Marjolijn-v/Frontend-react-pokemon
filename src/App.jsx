import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
const [pokemon, setPokemon] = useState({});

    async function fetchPokemon() {
      try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
console.log(response.data);
          setPokemon(response.data);
      }  catch (error) {
          console.error(error);
      }
    }

    useEffect(() => {
        void fetchPokemon();
    }, []);

    return (
    <>
      <h1>Gotta catch em all!</h1>

        <article className="pokemon-card">
            <ul>
                <li><h2>{pokemon.name}</h2></li>
                <li>{pokemon.sprites?.front_default}</li>
                <li>Moves: {pokemon.moves?.length}</li>
                <li>Weight: {pokemon.weight}</li>
                <li>Abilities:
                    <ul className="list-of-abilities">
                        {pokemon.abilities && pokemon.abilities.map((poke) => {
                            return <li key={poke.id}>
                                {poke.ability?.name}
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        </article>
    </>
  )
}

export default App
