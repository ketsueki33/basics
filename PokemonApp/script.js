let page = 1;
const pageSize = 12;

async function fetchPokemonData(pageNo) {
    const startPokemon = (pageNo - 1) * pageSize + 1;
    const endPokemon = startPokemon + pageSize - 1;

    const pokemonPromises = [];
    for (let i = startPokemon; i <= endPokemon; i++) {
        pokemonPromises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => ({
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                }))
        );
    }

    try {
        const results = await Promise.allSettled(pokemonPromises);

        const pokemonData = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);

        return pokemonData;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return [];
    }
}

async function displayPokemon(pageNo) {
    try {
        const pokemonList = await fetchPokemonData(pageNo);
        const container = document.getElementById("pokemon-container");

        const pokemonHTML = pokemonList
            .map(
                (pokemon) => `
                    <div class="pokemon-card">
                        <img src="${pokemon.sprite}" alt="${pokemon.name}">
                        <h3> 
                            <span class="number">#${pokemon.id}</span> 
                            <span class="title">${pokemon.name}</span>
                        </h3>
                        <p>Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
                    </div>
                `
            )
            .join("");

        container.innerHTML += pokemonHTML;
    } catch (error) {
        console.error("Error displaying Pokémon:", error);
    }
}

displayPokemon(1);

document.getElementById("load").addEventListener("click", () => {
    displayPokemon(++page);
});
