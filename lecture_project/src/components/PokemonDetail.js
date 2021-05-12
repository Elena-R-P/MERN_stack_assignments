import React, {useState, useEffect} from 'react';
import axios from 'axios';


const PokemonDetail = (props) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonNum}`)
        .then(res=>{
            setPokemonInfo(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }, [])
    
    
    

    
    return (
        <div>
            <h1>Pokemon Details</h1>
            {pokemonInfo?
            <>
                <img src={pokemonInfo.sprites.front_shiny} alt=""/>
                <p>Pokemon name: {pokemonInfo.name}</p>
            
            
            </>
            : "This pokemon not found"}
        </div>
    );
};

export default PokemonDetail;