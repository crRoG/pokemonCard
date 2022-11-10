$(document).ready(function () {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    pokemonNumber = getRandomInt(1, 152);
    console.log(pokemonNumber)
    fetchData();
    pokemonData();
});

const fetchData = async () => {
    try {
        // const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/152`)
        const pokeData = await pokeRes.json()
        console.log(pokeData)
    }
    catch (error) {
        console.log(error)
    }
}

const pokemonData = async () => {
    try {
        var string = "";
        // var name;
        // var type1;
        // var type2 = ''
        // var heigth;
        // var hp;
        // var attack;
        // var defense;
        // var speed;
        // var sAttack;
        // var sDefense;
        var Abilities = [];

        string += "<ol>"
        for (var i = 1; i < 153; i++) {
            const pokeR = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            const pokemon = await pokeR.json()
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
            string += "<li> " + pokeName + ", type: " + type1 + " " + type2 + " HP:" + hp + " </li>"

            for (var j = 0; j < pokemon.abilities.length; j++) {

            }

        }
        string += "</ol>"
    }
    catch (error) {
        console.log(error)
    }
    $('#poke-list').html(string);
}

