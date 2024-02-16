<script setup>
import { RouterView } from 'vue-router';
import { useMovieStore } from '@/stores/movieapi';
import { BGImageChanger } from '@/assets/Js/getGenres';
import { onMounted, ref, watch } from 'vue';


const movieStore = useMovieStore();



var ListType = ref("popular");
var ScreenType = ref("movie");

onMounted(() => {
  BGImageChanger('src/assets/bg.b54fb72f.jpg');
  ListType.value = localStorage.getItem("ListType");
  ScreenType.value = localStorage.getItem("ScreenType");
})

watch([ListType, ScreenType], ([newListType, newScreenType]) => {
  if (newScreenType == 'tv') {
    if (ListType.value == 'upcoming') {
      movieStore.listsetter(newScreenType,'airing_today', 1);
    }
    else if (ListType.value == 'now_playing') {
      movieStore.listsetter(newScreenType, 'on_the_air', 1);
    }
    else {
      movieStore.listsetter(newScreenType, newListType, 1);
    }
  }
  else {
    movieStore.listsetter(newScreenType, newListType, 1);
  }

  localStorage.setItem('ListType', newListType);
  localStorage.setItem('ScreenType', newScreenType);
});

const UpdateList = (pageination) => {
  movieStore.listsetter(ScreenType.value, ListType.value, pageination);
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
}
var paginations = ref([1, 2, 3, 4, 5]);

const paginationSetter = (page) => {
  if (page >= 3) {
    paginations.value = [page - 2, page - 1, page, page + 1, page + 2];
  } else {
    paginations.value = [1, 2, 3, 4, 5];
  }
};
const Lists = [
  {
    name: 'Now Playing',
    Mtype: 'now_playing',
    Ttype: 'on_the_air',
  },
  {
    name: 'Popular',
    Mtype: 'popular',
    Ttype: 'popular',
  },
  {
    name: 'Upcoming',
    Mtype: 'upcoming',
    Ttype: 'airing_today',
  },
  {
    name: 'Top Rated',
    Mtype: 'top_rated',
    Ttype: 'top_rated',
  },
]

const screens = [
  {
    name: 'Movies',
    type: 'movie',
  },
  {
    name: 'Tv-show',
    type: 'tv',
  }
]
// const ListTypeUpdater = (screen) => {

//   if(screen == movie)
// }
</script>

<template>
  <main class="home_vue flex flex-col items-center text-white justify-center bg-local">
    <!-- {{movieStore.Popular.results}} -->
    <!--List Types and screen(Tv or movies) -->
    <div class="show_typ flex justify-between w-[85%] text-[20px] mt-2 mb-2 ">
      <div class="list_type_wrapper flex -space-x-px text-base border border-gray-700">
        <router-link v-for="list in Lists"
          :to="{ name: 'Type_page_list', params: { screen: ScreenType, type: ListType, page: 1 }, props: { screen: ScreenType, type: ListType } }"
          class="m-0">
          <div class="border border-gray-700 p-2 hover:bg-lime-500 cursor-pointer"
            :class="{ 'bg-orange-700': (list.Mtype == ListType || list.Ttype == ListType) }"
            @click="ListType = list.Mtype">
            {{ list.name }}
          </div>
        </router-link>
      </div>
      <!-- <div class="list_type_wrapper flex -space-x-px text-base border border-gray-700" v-if="ScreenType == 'tv'">
        <router-link v-for="list in Lists"
          :to="{ name: 'Type_page_list', params: { screen: ScreenType, type: list.name, page: 1 } }">
          <div class="border border-gray-700 p-2 hover:bg-lime-500 cursor-pointer"
            :class="{ 'bg-orange-700': (list.Ttype == ListType) }" @click="ListType = list.Ttype">
            {{ list.name }}
          </div>
        </router-link>
      </div> -->
      <div class=" flex flex-row -space-x-px text-base border border-gray-700">
        <router-link v-for="screen in screens"
          :to="{ name: 'Type_page_list', params: { screen: ScreenType, type: ListType, page: 1 } }">
          <div class="border border-gray-700 p-2 hover:bg-lime-500 cursor-pointer"
            :class="{ 'bg-orange-700': (screen.type == ScreenType) }" @click="ScreenType = screen.type">
            {{ screen.name }}
          </div>
        </router-link>
      </div>

    </div>

    <!--Movies list  -->
    <RouterView @pageEmitter=paginationSetter />

    <!-- fotter nevigation -->
    <div class="pagination m-3 w-full flex justify-center">
      <nav aria-label="Page navigation example ">
        <ul class="flex items-center -space-x-px h-10 text-base ">
          <li>
            <RouterLink @click="UpdateList(--movieStore.Popular.page)"
              :to="{ name: 'list', params: { screen: ScreenType, type: ListType, page: movieStore.Popular.page - 1 }, props: { page: movieStore.Popular.page } }"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />v-if="ScreenType == 'tv'"
              </svg>
            </RouterLink>
          </li>
          <li v-for="       page        in        paginations       " class=" active:bg-green-500">
            <RouterLink
              :class="{ '!bg-gray-100 !text-gray-950 dark:!text-gray-950 dark:!bg-gray-100': page === movieStore.Popular.page }"
              :to="{ name: 'list', params: { screen: ScreenType, type: ListType, page: page }, props: { page: page } }"
              @click="UpdateList(page)"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {{ page }}</RouterLink>
          </li>
          <li>
            <RouterLink @click="UpdateList(++movieStore.Popular.page)"
              :to="{ name: 'list', params: { screen: ScreenType, type: ListType, page: movieStore.Popular.page + 1 }, props: { page: movieStore.Popular.page } }"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
<style scoped></style>
