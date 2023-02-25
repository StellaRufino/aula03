import React from 'react';
import Teste from './teste';

function App() {
  const [pokemon, setPokemon] = React.useState({});
  var id = 1;
  

  function Carregar(id = 1){
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  function Proximo() {
    id++;
    Carregar(id);
  }

  function teste(){
    return pokemon.abilities.map(data => <Teste text={data.ability.name} />)
  }

  return (
    pokemon.sprites ?
      <div>
        <img src={pokemon.sprites.front_default} />
        <h1>{pokemon.name}</h1>
        <p>{teste()}</p>
        <button onClick={Proximo}>Next</button>
      </div>
    :
      <div>
        <button onClick={Carregar(1)}>Carregar</button>
      </div>
    );
    
}

export default App;
