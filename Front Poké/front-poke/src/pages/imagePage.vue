<template>
    <q-page class="relative-position">
      <div class="absolute-full">
        <img :src="vegetationImagePath" alt="Padrão de Vegetação" class="full-width full-height object-cover" />
      </div>
      <div class="absolute-full flex flex-center">
        <img :src="pokemonImagePath" alt="Pokémon" class="poke-image-left" />
        <img :src="Poke2ImagePath" alt="Pokémon2" class="poke-image-right"/>
      </div>
    </q-page>
  </template>
  
  <script>
  import vegetationImagePath from 'src/assets/CampoLava.png';
  import axios from 'axios';
  
  export default {
    name: 'ImagePage',
    data() {
      return {
        pokemonImagePath: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        Poke2ImagePath: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
      };
    },
    mounted() {
      this.fetchPokemonImage('charizard');
    },
    methods: {
      async fetchPokemonImage(pokemonName) {
        try {
          const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`);
          const pokemonData = response.data[0];
          this.pokemonImagePath = pokemonData.sprites.front;
        } catch (error) {
          console.error('Erro ao buscar a imagem do Pokémon:', error);
        }
      }
    },
    setup() {
      return {
        vegetationImagePath
      };
    }
  };
  </script>
  

<style>
.relative-position {
  position: relative;
}

.absolute-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.flex {
  display: flex;
}

.flex-center {
  justify-content: center;
  align-items: end;
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}

.object-cover {
  object-fit: cover;
}

.poke-image-left {
  max-width: 30%;
  position: absolute;
  top: 22%;
  left: 34%;
}

.poke-image-right {
  max-width: 60%;
  position: absolute;
  top: 47%;
  right: 16%;
}

.absolute-top-right {
  position: absolute;
  top: 0;
  right: 0;
}

.q-pa-md {
  padding: 16px;
}

.q-mb-sm {
  margin-bottom: 8px;
}

.text-white {
  color: white;
}
</style>