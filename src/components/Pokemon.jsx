import React from 'react'

export const Pokemon = ({ pokemon }) => {

  return (
    <>
      <div>
        <h2>{(pokemon.name).toUpperCase()}</h2>
        <img src={`${pokemon.image}`} alt={`${pokemon.name}`} />
      </div>
    </>
  )
}
