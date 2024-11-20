<template>
  <q-page class="bg-white">
    <div class="flex flex-col items-center">
      <div class="py-8">
        <img :src="pokedex" alt="Pokedex" class="h-24 w-auto" />
      </div>
      <div class="grid grid-cols-6 gap-6 pb-8 w-full max-w-4xl">
        <div
          v-for="(pokemonId, index) in totalPokemons"
          :key="index"
          class="bg-gray-200 rounded-md flex justify-center items-center relative"
          @click="togglePokemonImage(pokemonId)"
        >
          <img :src="getPokemonImageUrl(pokemonId, currentImageType)" alt="Pokémon" class="w-full h-full object-contain" />
          <div class="absolute top-0 right-0 p-2 bg-gray-500 text-white rounded-bl-md cursor-pointer" @click.stop="toggleImageType">
            {{ currentImageType === 'Back' ? 'Front' : 'Back' }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import pokedex from 'src/assets/Pokedex.png';

export default {
  name: 'PokemonGridPage',
  data() {
    return {
      totalPokemons: 151,
      currentPokemonId: 1,
      currentImageType: 'Back',
      pokedex: pokedex
    };
  },
  methods: {
    getPokemonImageUrl(id, type) {
      if (type === 'Front') {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
      } else {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      }
    },
    togglePokemonImage(id) {
      this.currentPokemonId = id;
    },
    toggleImageType() {
      this.currentImageType = this.currentImageType === 'Back' ? 'Front' : 'Back';
    }
  }
};
</script>

<style>
.bg-white {
  background-color: white;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.rounded-md {
  border-radius: 0.375rem;
}

.grid {
  display: grid;
}

.grid-cols-6 {
  grid-template-columns: repeat(6, 1fr);
}

.gap-6 {
  gap: 1.5rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.h-24 {
  height: 20rem;
}

.w-auto {
  width: auto;
}

.w-full {
  width: 100%;
}

.max-w-4xl {
  max-width: 80rem;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.p-2 {
  padding: 0 rem;
}

.bg-gray-500 {
  background-color: #e5e7eb;
}

.text-white {
  color: #e5e7eb;
}

.rounded-bl-md {
  border-bottom-left-radius: 0.375rem;
}

.cursor-pointer {
  cursor: pointer;
}

.h-full {
  height: 100%;
}

.object-contain {
  object-fit: contain;
}
</style>
