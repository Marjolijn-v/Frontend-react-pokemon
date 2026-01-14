import './App.css'
import PokeCard from "./components/pokeCard/pokeCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonNames, setPokemonNames] = useState([]);

    async function fetchPokemon() {
        try {
            const response1 = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
            const response2 = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            const response3 = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
            // console.log(response.data);
            setPokemon([response1.data, response2.data]);
            setPokemonNames(response3.data.results);
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

        {pokemon.map(poke => (
        <PokeCard
        name ={poke.name}
        image={poke.sprites?.front_default}
        moves={poke.moves?.length}
        weight={poke.weight}
        abilities={poke.abilities}
        key={poke.id}
            />
        ))}

        <ul>
            {pokemonNames.map((pokeName) => (
                <li key={pokeName.name}>{pokeName.name}</li>
            ))}
        </ul>

    </>
  )
}

export default App
