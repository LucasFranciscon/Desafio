<template>
  <q-page>
    <div>
      <h5 class="text-left text-xl font-semibold" style="margin-left: 10px">GIFs Favoritos</h5>
    </div>
    <div style="width: 100%; margin-left: 16px; margin-right: 16px;">
      <q-card>
        <q-card-section>
         <div v-if="favoritesStore.favorites.length === 0" class="q-pa-md text-center">
            <p 
              class="text-h6 q-mb-md" 
              style="font-family: 'Roboto', sans-serif; font-weight: 500; color: #333;">
              Você ainda não possui nenhum gif salvo.
            </p>
            <p class="text-subtitle2" style="color: #666;">
              Parece que você ainda não adicionou nenhum gif aos favoritos. Que tal adicionar alguns?
            </p>
          </div>
          <q-list v-else class="q-pa-md">
            <div class="row q-col-gutter-md">
              <div 
                v-for="gif in favoritesStore.favorites" 
                :key="gif.id" 
                class="col-3 q-pa-sm"
              >
                <q-card class="q-pa-sm" style="position: relative;">
                  <div style="position: relative; width: 100%; height: 200px;">
                    <q-btn 
                      @click="toggleFavorite(gif)" 
                      :icon="gif.isFavorite ? 'favorite' : 'favorite_border'" 
                      round 
                      color="red" 
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
import { useFavoritesStore } from 'stores/favorites'

const favoritesStore = useFavoritesStore()

const toggleFavorite = (gif) => {
  if (favoritesStore.isFavorite(gif)) {
    favoritesStore.removeFavorite(gif);
  }

  favoritesStore.favorites = favoritesStore.favorites.filter(item => item.id !== gif.id);
};
</script>