<template>
  <q-page>
    <q-list>
      <q-item v-for="category in categories" :key="category.name" clickable @click="fetchCategoryGIFs(category.name)">
        <q-item-section>{{ category.name }}</q-item-section>
      </q-item>
    </q-list>
    <q-list v-if="categoryGIFs.length > 0">
      <q-item v-for="gif in categoryGIFs" :key="gif.id">
        <q-item-section>
          <q-img :src="gif.images.fixed_height.url" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
//import axios from 'axios'

const categories = ref([])
const categoryGIFs = ref([])

const fetchCategories = async () => {
  // Chamada para a API do Giphy para obter categorias
}

const fetchCategoryGIFs = async () => {
  // Chamada para a API do Giphy para obter GIFs da categoria
}

fetchCategories()
</script>
