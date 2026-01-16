import './App.css'
import PokeCard from "./components/pokeCard/pokeCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [pokeData, setPokeData] = useState();

    async function fetchPokemon() {
        try {
            const response3 = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
            console.log(response3.data.results);
            setPokemon(response3.data.results);
            setPokeData(response3.data);
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

        <section className="outer-container">
            <ul className="cards-container">
                {pokemon.map((poke) => (
                    <PokeCard
                        key={poke.name}
                        url={poke.url}
                    />
                ))}
            </ul>
        </section>
    </>
    )
}

export default App
