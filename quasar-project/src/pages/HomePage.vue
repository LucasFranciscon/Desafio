<template>
  <q-page>
    <div>
      <h5 class="text-left text-xl font-semibold" style="margin-left: 10px">Buscar GIFs</h5>
    </div>
    <div style="margin-left: 16px; margin-right: 16px;">
      <q-card>
        <q-card-section class="row items-center">
          <q-input 
            v-model="searchTerm" 
            label="Buscar GIFs" 
            debounce="500" 
            @input="fetchGIFs" 
            outlined 
            class="col-grow q-mr-sm"
          />
          <q-btn 
            @click="fetchGIFs" 
            label="Buscar" 
            color="primary"
          />
        </q-card-section>
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
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFavoritesStore } from 'stores/favorites';
import { fetchTrendingGIFs, fetchSearchGIFs } from 'src/utils/api';

const searchTerm = ref('');
const gifs = ref([]);
const favoritesStore = useFavoritesStore();

const fetchGIFs = async () => {
  try {
    let fetchedGIFs = [];
    if (searchTerm.value) {
      fetchedGIFs = await fetchSearchGIFs(searchTerm.value);
    } else {
      fetchedGIFs = await fetchTrendingGIFs();
    }
    gifs.value = fetchedGIFs.map((gif) => ({
      ...gif,
      isFavorite: favoritesStore.isFavorite(gif),
    }));
  } catch (error) {
    console.error("Erro ao buscar GIFs", error);
  }
};

onMounted(() => {
  fetchGIFs();
});

const toggleFavorite = (gif) => {
  if (favoritesStore.isFavorite(gif)) {
    favoritesStore.removeFavorite(gif);
  } else {
    favoritesStore.addFavorite(gif);
  }
  gifs.value = gifs.value.map((g) => {
    if (g.id === gif.id) {
      g.isFavorite = favoritesStore.isFavorite(g);
    }
    return g;
  });
};
</script>