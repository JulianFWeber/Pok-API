/*export default {
    async getPokemons() {
      try {
        const response = await api.getPokemons('http://localhost:3000/pokemons');
        if (response.ok) {
          const allPokemons = await response.json();
          return allPokemons.map(pokemon => ({
            name: pokemon.name,
            sprite: pokemon.sprites[0].front
          }));
        } else {
          console.error('Erro ao buscar Pokémons');
          return [];
        }
      } catch (error) {
        console.error('Erro:', error);
        return [];
      }
    }
  }
*/