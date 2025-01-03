<template>
  <q-layout view="hHh Lpr fF">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
        <div class="q-gutter-sm flex items-center">
          <span class="q-mr-xs text-lg font-semibold">Lucas Franciscon</span>
          <q-avatar size="30px" class="bg-white border-2 border-black">
            <q-icon name="person" color="black" size="37px" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer 
      show-if-above 
      v-model="leftDrawerOpen" 
      bordered 
      class="bg-blue-800" 
      style="background-color: #172554 !important; border-top-right-radius: 0.5rem !important;">
      <q-list>
        <q-item
          to="/"
          clickable
          exact-active-class="bg-blue"
          style="border-radius: 1rem !important; margin-left: 12px; margin-right: 12px; margin-top:4px" 
        >
         <div class="flex items-center">
            <q-icon name="home" class="text-white" style="margin-right: 5px;" />
            <q-item-section class="text-lg font-semibold text-white hover:text-blue-500">Home</q-item-section>
          </div>
        </q-item>
        <q-item
          to="/favoritos"
          clickable
          exact-active-class="bg-blue"
          style="border-radius: 1rem !important; margin-left: 12px; margin-right: 12px; margin-top:4px" 
        >
          <div class="flex items-center">
            <q-icon name="favorite" class="text-white" style="margin-right: 5px;" />
            <q-item-section class="text-lg font-semibold text-white hover:text-blue-500">Favoritos</q-item-section>
          </div>
        </q-item>
        <q-item
          to="/categorias"
          clickable
          exact-active-class="bg-blue"
          style="border-radius: 1rem !important; margin-left: 12px; margin-right: 12px; margin-top:4px" 
        >
          <div class="flex items-center">
            <q-icon name="category" class="text-white" style="margin-right: 5px;" />
            <q-item-section class="text-lg font-semibold text-white hover:text-blue-500">Categorias</q-item-section>
          </div>
        </q-item>
        <q-item
          to="/sobre"
          clickable
          exact-active-class="bg-blue"
          style="border-radius: 1rem !important; margin-left: 12px; margin-right: 12px; margin-top:4px" 
        >
          <div class="flex items-center">
            <q-icon name="info" class="text-white" style="margin-right: 5px;" />
            <q-item-section class="text-lg font-semibold text-white hover:text-blue-500">Sobre</q-item-section>
          </div>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
</script>