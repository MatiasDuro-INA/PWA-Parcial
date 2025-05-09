import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon';



function CargarPokemonsRandom() {

    // const { allPokemon, setAllPokemon } = useState()


    for (let id = 1; id <= 151; id++) {

        // console.log(id);

        const allPokemon = []

        allPokemon.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json())
                .then(data => {
                    currentPoke = {
                        id: data.id,
                        name: data.name,
                        image: data.sprites.other.showdown.front_default
                    }
                })
        )
        console.log(allPokemon);

    }
}


CargarPokemonsRandom()


// useEffect(() => {
//     CargarPokemonsRandom()
// }, [])



export const PokemonList = () => {
    let pokemon;

    return (
        <>
            {
                pokemon ? (<Pokemon pokemon={pokemon} />) : (<p>Cargando pokemon...</p>)
            }
        </>
    )
}
