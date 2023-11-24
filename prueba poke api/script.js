const pokemonContainer = document.querySelector('.pokemon-container');

window.navigator;

console.log(window.navigator.onLine);

function fetchPokemon(id) {

  

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((res) => res.json())
  .then((data) => {
      createPokemon(data);
  })
}

function fetchPokemons(number){
  for (let i = 1; i <= number; i++) {
    console.log(window.navigator.onLine);

    if (window.navigator.onLine) {
      fetchPokemon(i);
    }

    else {
      createPokemon(pokemon);
    }
  }
}

function createPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  const types = document.createElement('p');
  types.classList.add('types');
  types.textContent = pokemon.types.map((type) => type.type.name).join(', ');

  if (types.textContent.includes('grass')) {
    card.style.backgroundColor = '#78C850';
  }
  if (types.textContent.includes('fire')) {
    card.style.backgroundColor = '#F08030';
  }

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(types);

  pokemonContainer.appendChild(card);
}

fetchPokemons(6);


