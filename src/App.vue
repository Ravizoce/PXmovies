<script setup>
import { RouterView } from 'vue-router'
import { useMovieStore } from './stores/movieapi';
import navview from './views/navview.vue';
import { BgImage } from './assets/Js/getGenres';
import { onMounted } from 'vue';
import LoadingScreen from './components/LoadongScreen/LoadingScreen.vue';


const movieStore = useMovieStore();
onMounted(() => {

  window.addEventListener('scroll', handleScroll);
})


const handleScroll = () => {
  const scrollPosition = window.scrollY;

  const Nav = document.getElementById('navview');
  const Vue = document.getElementById('Router_vue');
  if (Nav) {
    const { top, bottom } = Vue.getBoundingClientRect();
    if (top <= -5) {
      Nav.classList.remove('bg-gray-900');
      Nav.classList.remove('bg-opacity-85');
      Nav.classList.add('bg-yellow-400');
    }
    else {
      Nav.classList.remove('bg-yellow-400');
      Nav.classList.add('bg-gray-900');
      Nav.classList.add('bg-opacity-85');
    }
  }
}

const loadList = () => {
  movieStore.listsetter('movie', 'popular', '1');
}
</script>
<template>
  <div class="main_div bg-cover bg-fixed bg-no-repeat" :style="{ backgroundImage: 'url(' + BgImage + ')' }">
    <navview id="navview" class="bg-gray-900 bg-opacity-85" />
    <div id="Router_vue">
      <!-- <LoadingScreen /> -->
      <!-- <RouterView /> -->
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <footer class="footer_wrapper flex flex-row h-fit">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="md:mb-0 basis-0 flex justify-between">
            <!-- <router-link :to="{ name: 'defaultlist', props: { page: 2, screen: 'tv', type: 'popular' } }" class="hover:!bg-transparent flex" > -->
              <img class="w-10 h-10 mr-2" src="@/assets/icons/logo.png" alt="logo.png">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white w-fit">RPJ</span>
            <!-- </router-link> -->
          </div>
        </div>
        <div class="sm:flex sm:justify-center flex justify-center ">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 RPJ
            All Rights Reserved . Inspired By <a class="hover:bg-transparent underline"
              href="https://developer.themoviedb.org/docs/getting-started">TMDB</a>.Created with VUE
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
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
