import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default {
  async getPokemonList () {
    const response = await api.get('/pokemons')
    return response.data
  },

  async getPokemonById (id) {
    const response = await api.get(`/pokemons/${id}`)
    return response.data
  },

  async getUsers () {
    const response = await api.get('/Users/')
    return response.data
  },
    
  async createPokemon (pokemon) {
    const response = await api.post('/pokemons', pokemon)
    return response.data
  }
}
