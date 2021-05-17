import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
        
    
    const getPokemons = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>{
            setPokemonInfo(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    // const getPokemons = ()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //         .then(res => {
    //             res.json()
    //         })
    //         .then(res => {
    //             setPokemonInfo({
    //                 pokemon: res.results
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div>
            <button onClick={getPokemons} className="btn btn-danger">Fetch Pokemon</button>
            {
                pokemonInfo.map((results, idx) => {
                return (<div key={idx}>Pokemon name: {results.name}</div>)
            })}
        </div>
    );
};

export default Pokemon;