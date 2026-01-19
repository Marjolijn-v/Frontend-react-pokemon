import './PokeCard.css';
import {useEffect, useState} from "react";
import axios from "axios";

function PokeCard( { url }) {

    const [pokeData, setPokeData] = useState();

    async function fetchData() {
         try {
             const response = await axios.get(url);

             setPokeData(response.data);
             // console.log(response.data);

         } catch(error) {
             console.error(error);
         }
    }

    useEffect(() => {
        void fetchData();
    }, [url]);

    return (
        <article className="pokemon-card">
            <ul>
                <li><h2>{pokeData?.name}</h2></li>
                <li><img src={pokeData?.sprites?.front_default} alt="Image of pokemon" /></li>
                <li>Moves: {pokeData?.moves.length}</li>
                <li>Weight: {pokeData?.weight}</li>
                <li>Abilities:
                    <ul className="list-of-abilities">
                        {pokeData?.abilities && pokeData?.abilities.map((ability) => {
                            return <li key={ability.ability.name}>
                                {ability.ability.name}
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        </article>
    );
}

export default PokeCard;
