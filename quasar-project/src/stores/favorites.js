import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  }),
  actions: {
    addFavorite(gif) {
      this.favorites.push(gif)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    removeFavorite(gif) {
      this.favorites = this.favorites.filter(item => item.id !== gif.id)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
