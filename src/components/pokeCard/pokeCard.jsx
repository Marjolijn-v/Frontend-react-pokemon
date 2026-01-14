import './PokeCard.css';


function PokeCard( { name, image, moves, weight, abilities }) {

    return (
        <article className="pokemon-card">
            <ul>
                <li><h2>{name}</h2></li>
                <li><img src={image} alt="Image of pokemon" /></li>
                <li>Moves: {moves}</li>
                <li>Weight: {weight}</li>
                <li>Abilities:
                    <ul className="list-of-abilities">
                        {abilities && abilities.map((ability) => {
                            return <li key={ability.id}>
                                {ability.ability?.name}
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        </article>
    );
}

export default PokeCard;
