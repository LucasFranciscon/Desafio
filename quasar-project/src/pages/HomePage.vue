<template>
  <q-page>
    <q-input v-model="searchTerm" label="Buscar GIFs" debounce="500" @input="fetchGIFs" />
    <q-btn @click="fetchGIFs" label="Buscar" color="primary" />
    <q-list>
      <q-item v-for="gif in gifs" :key="gif.id">
        <q-item-section>
          <q-img :src="gif.images.fixed_height.url" />
        </q-item-section>
        <q-item-section>
          <q-btn @click="toggleFavorite(gif)" icon="favorite" round />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const searchTerm = ref('')
const gifs = ref([])

const fetchGIFs = async () => {
  try {
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'hXUhNIfYNgo35pZ26oC60AMrL4vtqvH0',
        q: searchTerm.value,
        limit: 10
      }
    })
    gifs.value = response.data.data
  } catch (error) {
    console.error('Erro ao buscar GIFs', error)
  }
}

onMounted(fetchGIFs)

const toggleFavorite = () => {

}
</script>