<template>
  <div class="main_div bg-cover bg-fixed bg-no-repeat " :style="{ backgroundImage: 'url(' + BgImage + ')' }">
    <navview id="navview" class="bg-gray-950 opacity-85" />
    <div id="Router_vue">
      <!-- <RouterView /> -->
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useMovieStore } from './stores/movieapi';
import navview from './views/navview.vue';
import { BgImage } from './assets/Js/getGenres';
import { onMounted } from 'vue';

const movieStore = useMovieStore();
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // loadList();
})
// BGImageChanger('src/assets/bg.b54fb72f.jpg');

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  const Nav = document.getElementById('navview');
  const Vue = document.getElementById('Router_vue');
  if (Nav) {
    const { top, bottom } = Vue.getBoundingClientRect();
    if (top <= -5) {
      Nav.classList.remove('bg-gray-950');
      Nav.classList.remove('opacity-85');
      Nav.classList.add('bg-yellow-400');
    }
    else {
      Nav.classList.remove('bg-yellow-400');
      Nav.classList.add('bg-gray-950');
      Nav.classList.add('opacity-85');
    }
  }
}

const loadList = () => {
  movieStore.listsetter('movie', 'popular', '1');
}

</script>

<style scoped>
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  /* background: rgb(158, 158, 244); */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
