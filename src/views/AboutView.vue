<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '@/stores/movieapi';
import { BgImage, BGImageChanger } from '@/assets/Js/getGenres';

const prop = defineProps(['id', 'screen']);
const movie = useMovieStore();

// const getGenreName = (id) => {
//   const gen = movie.genres.genres.find((genre) => genre.id == id);
//   // return gen.name;
// }

onMounted(() => {
  // movie.Detailsloader(prop.id, "movie");
  DetailUpdate(prop.id);
})
const DetailUpdate = async (Id) => {
  await movie.Detailsloader(Id, prop.screen);
  window.scrollTo({
    top: 0,
    // Smooth scrolling
  });
  let bgimage = 'https://image.tmdb.org/t/p/w300/' + movie.MovieDetail.poster_path;
  BGImageChanger(bgimage);
}


</script>
<template>
  <main id="Top" class="about_vue bg-local flex flex-col items-center">
    <!-- :style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + movie.MovieDetail.poster_path + ')' }"> -->
    <!-- top card -->
    <div class="w-[77%] min-w-[77%] flex justify-center align-middle items-center">
      <div
        class=" movie_detailes md:flex md:flex-row md:justify-between md:p-5 rounded-t-2xl bg-opacity-70 mt-5  bg-slate-800">
        <div class="left_side md:basis-[30%] grow">
          <div class="poster p-2">
            <img class="rounded-md" :src="'https://image.tmdb.org/t/p/w300/' + movie.MovieDetail.poster_path" alt="one"
              draggable="false">
          </div>
        </div>
        <div class="right_side flex flex-col justify-center text-pretty basis-[60%] p-2 pt-8 grow-0">
          <div class="Header_wrapper flex flex-col">
            <div class="Title_wrapper flex flex-row justify-between mr-16">
              <div class="title text-5xl underline-offset-8 underline text-yellow-700 sm"
                v-if="movie.MovieDetail.original_title">
                {{ movie.MovieDetail.original_title }}
              </div>
              <div class="title text-5xl underline-offset-8 underline text-yellow-700 sm" v-if="movie.MovieDetail.name">
                {{ movie.MovieDetail.name }}
              </div>
              <div class="Rating p-2 mt-2">
                <span class="rounded-3xl text-yellow-600 bg-slate-900 p-2 text-[20px]">
                  {{ movie.MovieDetail.vote_average }}
                </span>
              </div>
            </div>
            <div class="tagline mt-2 pl-2 text-yellow-600">
              {{ movie.MovieDetail.tagline }}
            </div>
          </div>
          <div class="Overview text-white mt-2">
            {{ movie.MovieDetail.overview }}
          </div>
          <div class="genre text-lg md:flex md:justify-between pl-2 text-white mt-3">
            <div class="genre flex flex-col  grow-0 w-[50%]">
              <div class="genre_title underline text-yellow-600">
                Genres:
              </div>
              <div class="genres flex flex-row flex-wrap justify-center">
                <div v-for="genre in movie.MovieDetail.genres"
                  class="m-2 flex justify-center text-[13px] p-1 pl-2 pr-2 rounded-xl bg-orange-900">
                  {{ genre.name }}
                </div>
              </div>
            </div>
            <div class="countries flex flex-col">
              <div class="countries_title underline text-yellow-600">
                Countries:
              </div>
              <div class="countries flex justify-center">
                <div v-for="country in movie.MovieDetail.production_countries"
                  class="m-2 flex justify-center text-[13px] p-1 pl-2 pr-2 rounded-xl bg-orange-900">
                  {{ country.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="languages_spoken text-white">
            <div class="language_title underline text-yellow-600">
              Spoken Languages
            </div>
            <div class="language flex ">
              <div v-for="Language in movie.MovieDetail.spoken_languages"
                class="m-2 flex justify-center text-[13px] p-1 pl-2 pr-2 rounded-xl bg-orange-900">
                {{ Language.english_name }}/{{ Language.name }}
              </div>
            </div>
          </div>
          <div
            class="flex flex-row justify-around items-center text-[15px] text-black bg-yellow-600 opacity-80 rounded-md w-[100%] h-16 mt-6">
            <div class="release bg-opacity-100">
              Release Date: {{ movie.MovieDetail.release_date }}
            </div>
            <div class="runtime bg-opacity-100">
              Rumtime: {{ movie.MovieDetail.runtime }}
            </div>
            <div class="revinue bg-opacity-100">
              Revenue: {{ movie.MovieDetail.revenue }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- top card end -->
    <!-- Actors/Directiors -->
    <div class="Actors_wrapper bg-white  w-[77%] flex flex-col ">
      <div class="Actors_title  p-2 ">
        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-purple-500">
          Actors
        </h1>
      </div>
      <div v-if="movie.CriditHolders.length === 0" class="placeholder-message text-black flex justify-start ml-6 text-[18px]">
        <strong>No credit holders found.</strong>
      </div>
      <div class="ridit_holders text-white grid grid-cols-5 justify-between p-3 ">
        <div class="cridit_holder_card bg-slate-700 m-2 w-fit" v-for="holder in movie.CriditHolders">
          <div class="top h-56 flex justify-center">
            <img class=" h-52 w-40" :src="'https://image.tmdb.org/t/p/w300/' + holder.profile_path" :alt="holder.name + ' image'">
          </div>
          <div class="buttom">
            <div class="name flex justify-center text-pretty">
              <strong>{{ holder.name }}</strong>
            </div>
            <div class="character flex justify-center text-pretty ">
              {{ holder.character }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Actors/Directors finished -->
    <!-- Recomendations -->
    <div class="Recomendations w-[77%] bg-opacity-70 p-2 bg-slate-800">
      <div class="Recomendation_title flex flex-col">
        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-purple-500">
          RECOMMENDATIONS
        </h1>
      </div>
      <!-- <div class=" grid grid-cols-4  mb-6 "> -->
      <div class=" flex  flex-wrap justify-center  mb-6 ">
        <div v-for="Recomendation in movie.Recomendations.results"
          class="p-3 m-3 w-[22%] bg-black rounded-xl hover:translate-y-[-5px] duration-100 ease-in-out">
          <RouterLink @click="DetailUpdate(Recomendation.id)"
            :to="{ name: 'about', params: { id: Recomendation.id }, props: { id: Recomendation.id } }"
            class="hover:bg-black ">
            <div class="poster_image mb-1 ">
              <img class="rounded-md" :src="'https://image.tmdb.org/t/p/w300/' + Recomendation.poster_path"
                alt="poster_image" draggable="false">
            </div>
            <div class="body">
              <div class="title_wrapper flex items-center mr-1 justify-around">
                <div class="title" v-if="Recomendation.original_title">
                  {{ Recomendation.original_title }}
                </div>
                <div class="title" v-if="Recomendation.name">
                  {{ Recomendation.name }}
                </div>
                <div class="reating p-2">
                  <span class="rounded-3xl bg-slate-900 p-2 text-[13px]">
                    {{ Recomendation.vote_average }}
                  </span>
                </div>
              </div>
              <!-- <div class="catagories flex flex-wrap">
                <div class="m-2 flex justify-center text-[13px] p-1 rounded-xl bg-orange-900"
                  v-for="genre_id in Recomendation.genre_ids">
                  {{ getGenreName(genre_id) }}
                </div>
              </div> -->
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>


  <!-- <div>
      <div v-for="logo in movie.MovieDetailImages.backdrops">
        <img  class="rounded-md" v-if="logo.iso_639_1 == null"
          :src="'https://image.tmdb.org/t/p/w300/' + logo.file_path" alt="one" draggable="false">
      </div>
    </div> -->
</template>

<style scoped>
.about_vue {
  background-size: cover;
  background-attachment: fixed;
}
</style>
