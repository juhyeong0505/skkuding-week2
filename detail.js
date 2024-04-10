const pokemon = JSON.parse(window.localStorage.getItem("pokemonKey"));

console.log(pokemon);
document.getElementById('img').setAttribute('src', pokemon.photo);
document.getElementById('h2').innerText = pokemon.name;
document.getElementById('height').innerText = pokemon.height;
document.getElementById('weight').innerText = pokemon.weight;
document.getElementById('types').innerText = pokemon.types;
document.getElementById('base').innerText = pokemon['base-Experience'];
document.getElementById('abilities').innerText = pokemon.abilities;
document.getElementById('hp').innerText = pokemon.hp;
document.getElementById('defense').innerText = pokemon.defense;
document.getElementById('special-attack').innerText = pokemon['special-attack'];
document.getElementById('special-defense').innerText = pokemon['special-defense'];
document.getElementById('speed').innerText = pokemon.speed;
