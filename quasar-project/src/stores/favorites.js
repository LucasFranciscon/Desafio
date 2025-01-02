import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  }),
  actions: {
    addFavorite(gif) {
      if (!this.isFavorite(gif)) {
        this.favorites.push(gif)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      }
    },
    removeFavorite(gif) {
      const index = this.favorites.findIndex(favorite => favorite.id === gif.id)
      if (index !== -1) {
        this.favorites.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      }
    },
    isFavorite(gif) {
      return this.favorites.some(favorite => favorite.id === gif.id)
    }
  }
})