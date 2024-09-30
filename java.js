const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';
        fetch(apiUrl)
            .then(response => response.json()) 
            .then(data => {
                const pokemonList = data.results; 
                const cardsContainer = document.getElementById('cards-container');

                pokemonList.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(details => {

                            const card = document.createElement('div');
                            card.classList.add('card');
                            card.innerHTML = `
                                <h3>${pokemon.name}</h3>
                                <img src="${details.sprites.front_default}" alt="${pokemon.name}">
                            `;
                            cardsContainer.appendChild(card); 
                        })
                        .catch(error => console.error('Error al obtener detalles del Pokémon:', error));
                });
            })
            .catch(error => console.error('Error al obtener los Pokémon:', error));