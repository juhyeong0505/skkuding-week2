//data 배열에 포켓몬의 데이터를 저장해둠.
const data = [
    {
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: 'Bulbasaur',
      height: '7',
      weight: '69',
      types: ['grass', 'poison'],
      'base-Experience': '64',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '45',
      attack: '49',
      defense: '49',
      'special-attack': '65',
      'special-defense': '65',
      speed: '45',
    },
    {
      photo:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      name: 'Ivysaur',
      height: '10',
      weight: '130',
      types: ['grass', 'poison'],
      'base-Experience': '142',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '60',
      attack: '62',
      defense: '63',
      'special-attack': '80',
      'special-defense': '80',
      speed: '60',
    },
    {
      photo:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      name: 'Venusaur',
      height: '20',
      weight: '1000',
      types: ['grass', 'poison'],
      'base-Experience': '236',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '80',
      attack: '82',
      defense: '83',
      'special-attack': '100',
      'special-defense': '100',
      speed: '80',
    },
    {
      photo:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      name: 'Charmander',
      height: '6',
      weight: '85',
      types: ['fire'],
      'base-Experience': '62',
      abilities: ['blaze', 'solar-power'],
      hp: '39',
      attack: '52',
      defense: '43',
      'special-attack': '60',
      'special-defense': '50',
      speed: '65',
    },
    {
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      name: 'Charmeleon',
      height: '11',
      weight: '190',
      types: ['fire'],
      'base-Experience': '142',
      abilities: ['blaze', 'solar-power'],
      hp: '58',
      attack: '64',
      defense: '58',
      'special-attack': '80',
      'special-defense': '65',
      speed: '80',
    },
    {
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      name: 'Charizard',
      height: '17',
      weight: '905',
      types: ['fire', 'flying'],
      'base-Experience': '240',
      abilities: ['blaze', 'solar-power'],
      hp: '78',
      attack: '84',
      defense: '78',
      'special-attack': '109',
      'special-defense': '85',
      speed: '100',
    },
    {
      photo:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      name: 'Squirtle',
      height: '5',
      weight: '90',
      types: ['water'],
      'base-Experience': '63',
      abilities: ['torrent', 'rain-dish'],
      hp: '44',
      attack: '48',
      defense: '65',
      'special-attack': '50',
      'special-defense': '64',
      speed: '43',
    },
    {
      photo:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      name: 'Wartortle',
      height: '10',
      weight: '225',
      types: ['water'],
      'base-Experience': '142',
      abilities: ['torrent', 'rain-dish'],
      hp: '59',
      attack: '63',
      defense: '80',
      'special-attack': '65',
      'special-defense': '80',
      speed: '58',
    },
    {  
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      name: 'Blastoise',
      height: '16',
      weight: '855',
      types: ['water'],
      'base-Experience': '239',
      abilities: ['torrent', 'rain-dish'],
      hp: '79',
      attack: '83',
      defense: '100',
      'special-attack': '85',
      'special-defense': '105',
      speed: '78',
    },
    {
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      name: 'Caterpie',
      height: '3',
      weight: '29',
      types: ['bug'],
      'base-Experience': '39',
      abilities: ['shield-dust', 'run-away'],
      hp: '45',
      attack: '30',
      defense: '35',
      'special-attack': '20',
      'special-defense': '20',
      speed: '45',
    },
  ]


const pokemonHtml = data.map((pokemon) => {
    const card = document.createElement("a");
    card.className = "card";
    //card.setAttribute('href', './detail.html');
    const pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", pokemon.photo);
    card.appendChild(pokemonImg);
    const pokemondiv = document.createElement("div");
    pokemondiv.className = "info-wrapper";
    pokemondiv.innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Types: ${pokemon.types.join(', ')}</p>
    `
    card.appendChild(pokemondiv);
    card.addEventListener("click", (click) => {
        window.localStorage.setItem("pokemonKey", JSON.stringify(pokemon));
        console.log(pokemon);
        window.location.href = "./detail.html";
    });

    return card;

})

pokemonHtml.forEach((pokemon) => {
    document.getElementById('card-wrapper').appendChild(pokemon);

})






