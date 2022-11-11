
$(document).ready(function () {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    pokemonNumber = getRandomInt(1, 152);
    console.log(pokemonNumber);
    pokeID = pokemonNumber;
    fetchData();
    pokemonData();
    pokeCard();
});

const fetchData = async () => {
    try {
        const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/152`)
        const pokeData = await pokeRes.json()
        const pokeRes2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/152/')
        const pokeSpecies = await pokeRes2.json()
        pokeDesc = pokeSpecies.flavor_text_entries[0].flavor_text;
    }
    catch (error) {
        console.log(error)
    }
}
const pokemonData = async () => {
    try {
        var Abilities = [];
        const pokeR = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const pokemon = await pokeR.json()
        const pokeRes2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`)
        const pokeSpecies = await pokeRes2.json()
        pokeDesc = pokeSpecies.flavor_text_entries[0].flavor_text;
        ///// Creacion de constantes ///// 
        sprite = pokemon.sprites.front_default;
        officialPicture = pokemon.sprites.other["official-artwork"].front_default;
        pokeName = pokemon.name;
        type1 = pokemon.types[0].type.name;
        if (pokemon.types.length > 1) {
            type2 = ''
            type2 += '& ' + pokemon.types[1].type.name;
        } else type2 = ''
        hp = pokemon.stats[0].base_stat;
        attack = pokemon.stats[1].base_stat;
        defense = pokemon.stats[2].base_stat;
        sAttack = pokemon.stats[3].base_stat;
        sDefense = pokemon.stats[4].base_stat;
        speed = pokemon.stats[5].base_stat;
        heigth = pokemon.height;
        weigth = pokemon.weight;
        for (var j = 0; j < pokemon.abilities.length; j++) {
            Abilities[j] = "";
            Abilities[j] = pokemon.abilities[j].ability.name
        }
    }
    catch (error) {
        console.log(error)
    }
    console.log(pokeName);
    $('#name').html(pokeName);
    $('#pokeID').html(pokeID);
    console.log(pokeDesc)
    $('#pokeDescrip').html(pokeDesc);
}

const pokeCard = () => {

}