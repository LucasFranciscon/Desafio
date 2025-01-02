<template>
  <q-page>
    <div>
      <h5 class="text-left text-xl font-semibold" style="margin-left: 14px">Categorias de GIFs</h5>
    </div>
    <div style="margin-left: 16px; margin-right: 16px;">
      <q-card class="min-h-[300px]">
        <q-card-section>
          <q-list class="q-pa-md">
            <div class="q-pa-sm">
              <label for="category-select" class="block text-sm font-medium text-gray-700">Escolha uma categoria</label>
              <select 
                id="category-select" 
                class="block w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                v-model="selectedCategory" 
                @change="fetchCategoryGIFs(selectedCategory)"
              >
                <option value="" disabled selected>Selecione uma categoria</option>
                <option v-for="category in categories" :key="category.name" :value="category.name">
                  {{ category.name }}
                </option>
              </select>
            </div>
          </q-list>
        </q-card-section>
      </q-card>
      <q-separator />
      <q-card-section>
        <q-list class="q-pa-md">
          <div class="row q-col-gutter-md">
            <div 
              v-for="gif in gifs" 
              :key="gif.id" 
              class="col-3 q-pa-sm"
            >
              <q-card class="q-pa-sm" style="position: relative;">
                <div style="position: relative; width: 100%; height: 200px;">
                  <q-btn 
                    @click="toggleFavorite(gif)" 
                    :icon="gif.isFavorite ? 'favorite' : 'favorite_border'" 
                    round 
                    :color="gif.isFavorite ? 'red' : 'grey'" 
                    class="q-mb-sm" 
                    style="position: absolute; top: 5px; right: 5px; z-index: 10;"
                  />
                  <q-img 
                    :src="gif.images.fixed_height.url" 
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                </div>
              </q-card>
            </div>
          </div>
        </q-list>
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFavoritesStore } from 'stores/favorites'
import { fetchCategories, fetchSearchGIFs } from 'src/utils/api'

const categories = ref([])
const gifs = ref([])
const favoritesStore = useFavoritesStore()

const loadCategories = async () => {
  try {
    categories.value = await fetchCategories();
  } catch (error) {
    console.error('Erro ao carregar categorias', error);
  }
};

const fetchCategoryGIFs = async (category) => {
  try {
    gifs.value = await fetchSearchGIFs(category);
    gifs.value = gifs.value.map(gif => ({
      ...gif,
      isFavorite: favoritesStore.isFavorite(gif)
    }));
  } catch (error) {
    console.error('Erro ao carregar GIFs da categoria', error);
  }
}

onMounted(() => {
  loadCategories();
})

const toggleFavorite = (gif) => {
  if (favoritesStore.isFavorite(gif)) {
    favoritesStore.removeFavorite(gif)
  } else {
    favoritesStore.addFavorite(gif)
  }
  gifs.value = gifs.value.map(g => {
    if (g.id === gif.id) {
      g.isFavorite = favoritesStore.isFavorite(g)
    }
    return g;
  })
}
</script>
