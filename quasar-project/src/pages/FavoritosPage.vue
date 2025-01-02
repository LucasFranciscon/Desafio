<template>
  <q-page>
    <q-list>
      <q-item v-for="gif in favoriteGIFs" :key="gif.id">
        <q-item-section>
          <q-img :src="gif.images.fixed_height.url" />
        </q-item-section>
        <q-item-section>
          <q-btn @click="removeFavorite(gif)" icon="remove_circle" round color="negative" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const favoriteGIFs = ref([])

const removeFavorite = () => {
  // Lógica para remover o GIF dos favoritos
}

</script>
