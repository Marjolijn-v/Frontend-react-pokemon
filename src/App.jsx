import './App.css'
import PokeCard from "./components/pokeCard/pokeCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "./components/button/button.jsx";


function App() {
    const [pokemon, setPokemon] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();

        fetchPokemon('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0', controller.signal);

        return () => {
            controller.abort(); // cleanup bij unmount
        }
    }, []);


    async function fetchPokemon(url, signal) {
        try {
            setError('');
            toggleLoading(true);

            const fetchUrl = url ? url : 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
            const response3 = await axios.get(fetchUrl, {signal});

            // console.log(response3.data.results);
            // console.log(response3.data.next);

            setPokemon(response3.data.results);
            setNextPage(response3.data.next);
            setPreviousPage(response3.data.previous);

        } catch (error) {
            console.error(error);
            setError('Er is iets mis gegaan, probeer het nog eens');
        } finally {
            toggleLoading(false);
        }
    }





    return (
    <>
        {error && <p>{error}</p>}

        <h1>Gotta catch em all!</h1>

        <section className="button-container">
           <Button
               fetchData={fetchPokemon}
               url={previousPage}
               title="Vorige"
               disabled={!previousPage || loading}
           />
            <Button
                fetchData={fetchPokemon}
                url={nextPage}
                title="Volgende"
                disabled={!nextPage || loading}
            />


        </section>

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
